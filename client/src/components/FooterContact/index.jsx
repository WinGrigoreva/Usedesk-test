import React from "react";

import s from "./FooterContact.module.sass";

import { inject, observer } from "mobx-react";

@inject ("MainStore")
@observer
export class FooterContact extends React.Component {
    render() {
        const mainStore = this.props.MainStore;
        return (
            <div className={s["contacts__info-box"]}>
                <span className={s["contacts__info-title"]}>{mainStore.city}</span>
                <a className={s["contacts__info-phone"]} href={"tel:"+mainStore.telephone.tel}>{mainStore.telephone.displayTel}</a>
                <a className={s["contacts__info-mail"]}
                  href={"mailto:"+mainStore.mail}>{mainStore.mail}</a>
            </div>
        )
    }
}