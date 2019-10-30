export class Individuo {
    constructor(public id?: String,public apodo?: string) { }

    static fromJson(individuoJSON): Individuo {
        return Object.assign(new Individuo(), individuoJSON)
    }

}