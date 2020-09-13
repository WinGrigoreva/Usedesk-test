import React from "react";
import { HeaderLogo } from "../HeaderLogo";

import s from "./Header.module.sass";

export class Header extends React.Component {
    render() {
        return (
            <section className={s.header}>
                <HeaderLogo />
                <h1 className={s.header__title}>Collections</h1>
            </section>
        )
    }
}