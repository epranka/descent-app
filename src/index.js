import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GitHub from "./GitHub";
import * as serviceWorker from "./serviceWorker";
import Credits from "./Credits";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Credits />
        <GitHub />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
