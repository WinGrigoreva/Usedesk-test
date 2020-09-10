import { action, observable } from "mobx";

export class TableStore {
    @observable data = [];
    @observable keys = [];
    directionOrder = {};

    @action sortTable = (key) => {
        let sortArr = this.data.slice();
        if (this.directionOrder.key != key || this.directionOrder.isDesc) {
            if (typeof(sortArr[0][key])==="number") {
                sortArr.sort((a,b)=>{
                    return a[key] >= b[key] ? 1 : -1;
                }); 
            } else {
                sortArr.sort((a,b)=>{
                    let left = a[key].toLowerCase();
                    let right = b[key].toLowerCase();
                    return left >= right
                    ? 1
                    : -1;
                }); 
            }        
            this.directionOrder.key = key;
            this.directionOrder.isDesc = false;
        } else {
            if (typeof(sortArr[0][key])==="number") {
                sortArr.sort((a,b)=>{
                    return a[key] <= b[key] ? 1 : -1;
                }); 
            } else {
                sortArr.sort((a,b)=>{
                    let left = a[key].toLowerCase();
                    let right = b[key].toLowerCase();
                    return left <= right
                    ? 1
                    : -1;
                }); 
            }        
            this.directionOrder.key = key;
            this.directionOrder.isDesc = true;
        }
        console.log(sortArr.map((el)=>{
            return el[key];
        }));
        console.log(this.directionOrder);
        this.data = sortArr;
    }

    constructor() {
        //настройки для запроса для разрешение обращаться к https://api.github.com/users/WinGrigoreva/repos
        var settings = {
            "Content-Security-Policy": "default-src 'self'; connect-src 'self' https://api.github.com https://api.github.com/users/ngrigorev/repos"
        };
        //выполняем запрос и ждем, когда он отработает
        fetch("https://api.github.com/users/WinGrigoreva/repos", settings)
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            this.data = json.map((e)=>{
                e.owner = JSON.stringify(e.owner);
                return e;
            });
            this.keys = json && json.length ? Object.keys(json[0]) : [];
        }).catch((error)=>{
            console.log(error);
            this.data = [];
            this.keys = [];
        })
    }
}