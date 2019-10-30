import * as _ from 'lodash'
import { Individuo } from './Individuo'
export class Equipo {
    constructor(public id?: string, public nombre?: string, public ownerId?: string, public owner?: string, public lider?: string) { }

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

}

export class EquipoComplete {
    public id: string = ""
    public nombre: string
    public owner: Individuo
    public lider: Individuo
    public integrantes: Array<Individuo> = []

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

    deleteMember(deletedMember: Individuo) {
        _.remove(this.integrantes, deletedMember)
    }
    
    addMember(newMember: Individuo) {
        this.integrantes.push(newMember)
    }

}


