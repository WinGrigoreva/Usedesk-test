// import "normalize";
import {App} from "./components/App";
import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "mobx-react";
import {MainStore} from "./stores/MainStore";
import {TableStore} from "./stores/TableStore";
import "./assets/styles/global.sass";

const dataStore = new MainStore();
const tableStore = new TableStore();

ReactDOM.render(
    <Provider MainStore={dataStore} TableStore={tableStore}>
        <App />
    </Provider>,
    document.getElementById("app")
    );