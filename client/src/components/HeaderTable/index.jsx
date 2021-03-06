import React from "react";
import s from "./HeaderTable.module.sass"


export class HeaderTable extends React.Component {
    render() {
        return (
            <div className={s["main-content__header-table"]}>
                {this.props.headers.map((element) => {
                    return (
                        <div className={s["main-content__header-cell"]} key={element.key} onClick={()=>{this.props.handlerSort(element.key)}}>
                            {element.key}
                            <svg className={s["main-content__header-icon"]} width="12" height="21" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.178 37.569C11.2697 37.7022 11.3925 37.8112 11.5357 37.8864C11.6789 37.9617 11.8382 38.001 12 38.001C12.1618 38.001 12.3211 37.9617 12.4643 37.8864C12.6075 37.8112 12.7303 37.7022 12.822 37.569L21.822 24.569C21.9262 24.4191 21.9873 24.2434 21.9986 24.0612C22.01 23.879 21.9712 23.6971 21.8865 23.5354C21.8018 23.3737 21.6743 23.2382 21.518 23.1439C21.3617 23.0495 21.1826 22.9997 21 23H3C2.81784 23.0008 2.63934 23.0511 2.48368 23.1458C2.32802 23.2404 2.2011 23.3756 2.11657 23.537C2.03203 23.6983 1.99308 23.8797 2.00391 24.0615C2.01473 24.2434 2.07492 24.4188 2.178 24.569L11.178 37.569Z" fill="white" />
                                <path d="M2.99999 19H21C21.1822 18.9994 21.3609 18.9492 21.5167 18.8546C21.6725 18.7601 21.7995 18.6248 21.8842 18.4634C21.9688 18.3021 22.0079 18.1206 21.9971 17.9387C21.9863 17.7568 21.9261 17.5813 21.823 17.431L12.823 4.431C12.45 3.892 11.552 3.892 11.178 4.431L2.17799 17.431C2.07382 17.5809 2.01273 17.7566 2.00136 17.9388C1.98999 18.121 2.02878 18.3029 2.11351 18.4646C2.19824 18.6263 2.32567 18.7618 2.48196 18.8561C2.63825 18.9505 2.81741 19.0003 2.99999 19Z" fill="white" />
                            </svg>
                        </div>
                    )
                })}
            </div>
        )
    }
}