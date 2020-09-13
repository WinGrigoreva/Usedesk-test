import s from "./CheckList.module.sass";

import React from "react";
import { inject, observer } from "mobx-react";

@inject("TableStore")
@observer
export class CheckList extends React.Component {
    render() {
        const tableStore = this.props.TableStore;
        return (
            <div className={s["main-content__checkList"]}>
                {tableStore.keys.map((element) => {
                    return (
                        <div className={s["main-content__checkList-item"]} key={element.key+"checkList"}>
                            <input type="checkbox" checked={element.isCheck} id={element.key} onChange={()=>{tableStore.checkColumn(element.key, !element.isCheck)}}/>
                            <label htmlFor={element.key}>{element.key}</label> 
                        </div>
                    )
                })}
            </div>
        )
    }
}
