import React from "react";
import { Table } from "../Table";
import {CheckList} from "../CheckList";

import s from "./Content.module.sass";

export class Content extends React.Component {
    render() {
        return (
            <section className={s["main-content"]}>
                    <h1 className={s["main-content__title"]}>Repositories: </h1>
                    <CheckList />
                    <Table />
            </section>
        )
    }
}