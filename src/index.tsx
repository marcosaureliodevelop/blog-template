import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Fragment>
            <GlobalStyle />
            <App />
        </Fragment>
    </React.StrictMode>
);

reportWebVitals();