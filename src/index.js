// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { App } from "./components/app";
// // import { AppMui } from './components/app-mui';
// import "./styles.css";
// // import { AntApp } from './components/app-ant/index';

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(<App/>);
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { App } from "./components/app";
import "./styles.css";
import { Provider } from "react-redux";
import store, { persistor } from "./storage/store";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(process.env);
// console.log(process.env.NODE_ENV ==="production");
const Router = process.env.REACT_APP_GH_PAGES === "true" ? HashRouter :BrowserRouter;
console.log(Router);

root.render(
    <Provider store={store}>
    <PersistGate persistor={persistor}>
        {/* {process.env.REACT_APP_GH_PAGES !== 'true' */}
            {/* ? <BrowserRouter>
                <App />
            </BrowserRouter>
            : <HashRouter>
                <App />
            </HashRouter>
        } */}
        <Router>
            <App/>
        </Router>

    </PersistGate>
</Provider>
);