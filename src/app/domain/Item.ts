export class Item {

    constructor(public id?: String,public apodo?: string,public poder?: string) { }

    static fromJson(individuoJSON): Item {
        return Object.assign(new Item(), individuoJSON)
    }

}