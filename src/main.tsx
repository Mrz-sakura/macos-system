import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {StoreContext} from "./pkg/store/StoreContext.tsx";
import rootStore from "./pkg/store/RootStore.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreContext.Provider value={rootStore}>
        <App/>
    </StoreContext.Provider>,
)
