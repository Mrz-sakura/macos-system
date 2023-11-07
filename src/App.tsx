import './App.scss'
import AppRouter from "./pkg/router/AppRouter.tsx";
import appStore from "./pkg/store/AppStore.ts";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    return (
        <div id="app" style={{backgroundImage: `url(${appStore.background})`}}>
            <AppRouter></AppRouter>
        </div>
    )
})

export default App
