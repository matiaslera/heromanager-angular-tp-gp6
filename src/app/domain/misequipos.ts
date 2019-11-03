import * as _ from 'lodash'
import { Individuo } from './Individuo'
import { isUndefined } from 'util'
import { LoginService } from '../services/loginService/login.service'
import { NewEquipoComponent } from '../nuevoEquipo/nuevoEquipo.component'
export class Equipo {
    constructor(public id?: string, public nombre?: string, public ownerId?: string, public owner?: string, public lider?: string) { }

    isTheOwner(id:String){
        return this.ownerId == id
    }

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

}

export class EquipoComplete {
    public id: string ="null"
    public nombre: string
    public owner: Individuo
    public lider: Individuo
    public integrantes: Array<Individuo> = []
    public posiblesIntegrantes:Individuo[]

    isANewTeam() {
        return this.owner === null
    }
    
    static fromJson(equipoJSON): EquipoComplete {
        return Object.assign(new EquipoComplete(), equipoJSON)
    }

    deleteMember(deletedMember: Individuo) {
        _.remove(this.integrantes, deletedMember)
        this.posiblesIntegrantes.push(deletedMember)
    }
    
    addMember(newMember: Individuo) {
        this.integrantes.push(newMember)
        _.remove(this.posiblesIntegrantes, newMember)
    }

    toJSON():EquipoComplete{
        delete this.posiblesIntegrantes
        return {...this}
   }
}


