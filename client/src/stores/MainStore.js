import { observable } from "mobx";

export class MainStore {
    @observable city = "";
    @observable mail = "";
    @observable telephone = {};

    constructor() {
        this.city = "г. Нижний Новгород";
        this.mail = "test@test.ru";
        this.telephone = {displayTel:"+7 (111) 222-33-44", tel: "+71112223344"};
    }
}