import Popover from "../common/Popover";
import {PopoverContent, PopoverTrigger} from "../common/Popover/Popover.tsx";
import React, {ReactElement} from "react";
import styles from './index.module.scss';

interface PopoverProps {
    children: ReactElement;
    content: React.ReactNode;
}


const StatusBarPopover: React.FC<PopoverProps> = ({children, content}) => {

    // const clonedTrigger = React.cloneElement(children, {
    //     ref: triggerRef,
    //     // onClick: handleToggle,
    // });

    return <Popover>
        <PopoverTrigger asChild={true}>{children}</PopoverTrigger>
        <PopoverContent className={styles.popover}>
            {content}
        </PopoverContent>
    </Popover>;
};

export default StatusBarPopover;
