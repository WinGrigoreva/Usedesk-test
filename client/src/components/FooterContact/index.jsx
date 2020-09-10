import React from "react";

import s from "./FooterContact.module.sass"

export class FooterContact extends React.Component {
    render() {
        return (
            <div className={s["contacts__info-box"]}>
                <span className="contacts__info-title">Нижний Новгород</span>
                <a className="contacts__info-phone" href="tel:+81111111111">+8 (111) 111– 11 – 11</a>
                <a className="contacts__info-mail"
                  href="mailto:test@mail.ru">test@mail.ru</a>
            </div>
        )
    }
}