import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {StoreContext} from "./pkg/store/StoreContext.tsx";
import rootStore from "./pkg/store/RootStore.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreContext.Provider value={rootStore}>
            <App/>
        </StoreContext.Provider>
    </React.StrictMode>,
)
