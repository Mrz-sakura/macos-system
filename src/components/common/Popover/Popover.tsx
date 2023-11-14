import * as React from "react";
import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingPortal,
    offset,
    Placement,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useId,
    useInteractions,
    useMergeRefs,
    useRole
} from "@floating-ui/react";

interface PopoverOptions {
    initialOpen?: boolean;
    placement?: Placement;
    modal?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function usePopover({
                               initialOpen = false,
                               placement = "bottom",
                               modal,
                               open: controlledOpen,
                               onOpenChange: setControlledOpen
                           }: PopoverOptions = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
    const [labelId, setLabelId] = React.useState<string | undefined>();
    const [descriptionId, setDescriptionId] = React.useState<
        string | undefined
    >();

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "end",
                padding: 5
            }),
            shift({padding: 5})
        ]
    });

    const context = data.context;

    const click = useClick(context, {
        enabled: controlledOpen == null
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const interactions = useInteractions([click, dismiss, role]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
            modal,
            labelId,
            descriptionId,
            setLabelId,
            setDescriptionId
        }),
        [open, setOpen, interactions, data, modal, labelId, descriptionId]
    );
}

type ContextType =
    | (ReturnType<typeof usePopover> & {
    setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
    setDescriptionId: React.Dispatch<
        React.SetStateAction<string | undefined>
    >;
})
    | null;

const PopoverContext = React.createContext<ContextType>(null);

export const usePopoverContext = () => {
    const context = React.useContext(PopoverContext);

    if (context == null) {
        throw new Error("Popover components must be wrapped in <Popover />");
    }

    return context;
};

export function Popover({
                            children,
                            modal = false,
                            ...restOptions
                        }: {
    children: React.ReactNode;
} & PopoverOptions) {
    const popover = usePopover({modal, ...restOptions});
    return (
        <PopoverContext.Provider value={popover}>
            {children}
        </PopoverContext.Provider>
    );
}

interface PopoverTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export const PopoverTrigger = React.forwardRef<
    HTMLElement,
    React.HTMLProps<HTMLElement> & PopoverTriggerProps
>(({children, asChild = false, ...props}, propRef) => {
    const context = usePopoverContext();

    let childrenRef: React.Ref<HTMLElement> | null = null;
    if (React.isValidElement(children) && 'ref' in children) {
        const ref = children.ref;

        if (typeof ref === 'function' || (typeof ref === 'object' && ref !== null)) {
            childrenRef = ref as React.Ref<HTMLElement>;
        }
    }

    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // 使用类型断言来确保 childProps 是一个对象
    const childProps = asChild && React.isValidElement(children) ? children.props as React.HTMLProps<HTMLElement> : {};


    const mergedProps = {
        ref,
        "data-state": context.open ? "open" : "closed",
        ...context.getReferenceProps(props),
        ...childProps
    };

    // 如果 asChild 为 true，返回克隆的子元素
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, mergedProps);
    }

    // 否则，返回 button 元素
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <button type="button" {...mergedProps}>{children}</button>;
});


export const PopoverContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(function PopoverContent({style, ...props}, propRef) {
    const {context: floatingContext, ...context} = usePopoverContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!floatingContext.open) return null;

    return (
        <FloatingPortal>
            <FloatingFocusManager context={floatingContext} modal={context.modal}>
                <div
                    ref={ref}
                    style={{...context.floatingStyles, ...style}}
                    aria-labelledby={context.labelId}
                    aria-describedby={context.descriptionId}
                    {...context.getFloatingProps(props)}
                >
                    {props.children}
                </div>
            </FloatingFocusManager>
        </FloatingPortal>
    );
});

export const PopoverHeading = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLProps<HTMLHeadingElement>
>(function PopoverHeading(props, ref) {
    const {setLabelId} = usePopoverContext();
    const id = useId();

    // Only sets `aria-labelledby` on the Popover root element
    // if this component is mounted inside it.
    React.useLayoutEffect(() => {
        setLabelId(id);
        return () => setLabelId(undefined);
    }, [id, setLabelId]);

    return (
        <h2 {...props} ref={ref} id={id}>
            {props.children}
        </h2>
    );
});

export const PopoverDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLProps<HTMLParagraphElement>
>(function PopoverDescription(props, ref) {
    const {setDescriptionId} = usePopoverContext();
    const id = useId();

    // Only sets `aria-describedby` on the Popover root element
    // if this component is mounted inside it.
    React.useLayoutEffect(() => {
        setDescriptionId(id);
        return () => setDescriptionId(undefined);
    }, [id, setDescriptionId]);

    return <p {...props} ref={ref} id={id}/>;
});

export const PopoverClose = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(function PopoverClose(props, ref) {
    const {setOpen} = usePopoverContext();
    return (
        <button
            type="button"
            ref={ref}
            {...props}
            onClick={(event) => {
                props.onClick?.(event);
                setOpen(false);
            }}
        />
    );
});
