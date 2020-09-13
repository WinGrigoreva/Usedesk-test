import React from "react";
import { Row } from "../Row";
import { HeaderTable } from "../HeaderTable";

import s from "./Table.module.sass";

import { inject, observer } from "mobx-react";

@inject("TableStore")
@observer
export class Table extends React.Component {
    render() {
        const tableStore = this.props.TableStore;
        let keysChecked = [];
        let dataChecked = [];
        if (tableStore.keys.filter((element)=>element.isCheck).length == 0) {
            keysChecked = tableStore.keys;
            dataChecked = tableStore.data;
    } else {
            keysChecked = tableStore.keys.filter((element)=>element.isCheck);
            dataChecked = tableStore.data.map((element)=>{
                let newElement = {};
                for (const obj of keysChecked) {
                        newElement[obj.key] = element[obj.key];                        
                }
                return newElement;
            }); 
    }
        return (
            <div className={s["main-content__table"]}>
                <HeaderTable headers={keysChecked} handlerSort={tableStore.sortTable}/>
                <div className={s["main-content__table-body"]}>
                    {dataChecked.map((element) => {
                        return <Row dataElement={element} key={element.id} />
                    })}
                </div>
            </div>
        )
    }
}