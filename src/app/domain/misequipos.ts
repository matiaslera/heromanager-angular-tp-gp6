import { Usuario } from './usuario'
import { Individuo, Entidad} from './Individuo'
export class Equipo implements Entidad{

    constructor(public id?: string, public nombre?: string, public ownerId?: string, public owner?: string, public lider?: string) { }

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

}

export class EquipoComplete {
    constructor(public id?: string, public nombre?: string, public ownerId?: String, public owner?: Individuo, public lider?: Individuo) { }

    toJSON(): any {
        return {
            ...this,
            lider: null,
            liderA: this.lider ? this.lider.id : '',
            owner: null,
            ownerA: this.owner ? this.owner.apodo : ''
        }
    }
}


