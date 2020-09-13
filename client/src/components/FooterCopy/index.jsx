import React from "react";
import s from "./FooterCopy.module.sass";

export class FooterCopy extends React.Component {
    render() {
        let date = new Date();
        return (
            <p className={s["footer__copy"]}>
                &copy; WinGrigoryeva, {date.getFullYear()}
            </p>
        )
    }
}


