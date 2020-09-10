import React from "react";
import { Row } from "../Row";
import { HeaderTable } from "../HeaderTable";

import s from "./Table.module.sass";

import { inject, observer } from "mobx-react";

@inject("TableStore")
@observer
export class Table extends React.Component {
    render() {
        return (
            <div className={s["main-content__table"]}>
                <HeaderTable headers={this.props.TableStore.keys} handlerSort={this.props.TableStore.sortTable}/>
                <div className={s["main-content__table-body"]}>
                    {this.props.TableStore.data.map((element) => {
                        return <Row dataElement={element} key={element.id} />
                    })}
                </div>
            </div>
        )
    }
}