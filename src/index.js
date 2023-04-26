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
import { BrowserRouter } from 'react-router-dom';
import { App } from "./components/app";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./storage/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
 <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
   
);