import s from "./Row.module.sass";

import React from "react";

export class Row extends React.Component {
    render() {
        let buffer = Object.keys(this.props.dataElement);
        return (
            <div className={s["main-content__row"]}>
                {buffer.map((element) => {
                    return (
                        <div className={s["main-content__row-cell"]} key={this.props.dataElement.id + element}>
                            {this.props.dataElement[element]}
                        </div>
                    )
                })}
            </div>
        )
    }
}
