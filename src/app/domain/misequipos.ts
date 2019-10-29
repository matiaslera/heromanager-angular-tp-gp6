import * as _ from 'lodash'
import { Individuo, Entidad } from './Individuo'
import { FormControl } from '@angular/forms'
export class Equipo implements Entidad {
  [x: string]: any

    constructor(public id?: string, public nombre?: string, public ownerId?: string, public owner?: string, public lider?: string) { }

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

}

export class EquipoComplete {
    public id: string = "null"
    public nombre: string
    public owner: Individuo
    public lider: Individuo 
    public integrantes: Array<Individuo> = []

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }
    
   

}


 