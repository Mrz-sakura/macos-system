import './App.scss'
import AppRouter from "./pkg/router/AppRouter.tsx";
import appStore from "./pkg/store/AppStore.ts";
import {observer} from "mobx-react-lite";
import Layout from "./components/Layout";

const App = observer(() => {
    return (
        <div id="app" style={{backgroundImage: `url(${appStore.background})`}}>
            <Layout>
                <AppRouter></AppRouter>
            </Layout>
        </div>
    )
})

export default App
