export class Individuo {

    constructor(public id?: String,public apodo?: string, public photoUrl?: string,public tipoDeIndividuo?, public password?: string,public nombre?: String, public alcance?: number, public peso?: number, 
        public danio?: number, public resistencia?: number, public precio?: number, public sobrenatural?: boolean) { }

    static fromJson(individuoJSON): Individuo {
        return Object.assign(new Individuo(), individuoJSON)
    }

    toJSON(): any{
        delete this.tipoDeIndividuo
        return this
   }
}