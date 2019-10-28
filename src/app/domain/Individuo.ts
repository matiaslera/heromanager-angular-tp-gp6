export interface Entidad{
}


export class Individuo implements Entidad{

    constructor(public id?: String,public apodo?: string,public owner?: Individuo) { }

    static fromJson(individuoJSON): Individuo {
        return Object.assign(new Individuo(), individuoJSON)
    }

}