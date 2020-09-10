import s from "./Row.module.sass";

import React from "react";

export class Row extends React.Component {
    render () {
        return (
            <div className={s["main-content__row"]}>
                {Object.keys(this.props.dataElement).map((key)=>{
                    return (
                    <div key={this.props.dataElement.id+key}>
                        {this.props.dataElement[key]}
                    </div>
                    )
                })}
            </div>
        )
    }
}
