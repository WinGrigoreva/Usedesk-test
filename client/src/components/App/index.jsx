import React from "react";
import {Content} from "../Content";
import {Header} from "../Header";
import {Footer} from "../Footer";

import s from "./App.module.sass"

export class App extends React.Component {
    render () {
        return (
            <div className={s.container}>
                <Header/>
                <Content />
                <Footer />
            </div>
        )
    }
}