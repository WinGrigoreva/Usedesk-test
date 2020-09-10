import React from "react";
import { FooterCopy } from "../FooterCopy";
import { FooterContact } from "../FooterContact";

import s from "./Footer.module.sass";

export class Footer extends React.Component {
    render() {
        return (
            <section className={s.footer}>
                <FooterContact />
                <FooterCopy />
            </section>
        )
    }
}