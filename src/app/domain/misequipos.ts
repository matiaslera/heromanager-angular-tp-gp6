import * as _ from 'lodash'
import { Individuo, Entidad } from './Individuo'
export class Equipo implements Entidad {

    constructor(public id?: string, public nombre?: string, public ownerId?: string, public owner?: string, public lider?: string) { }

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

}

export class EquipoComplete {
    public id: string
    public nombre: string
    public owner: Individuo
    public lider: Individuo
    public integrantes: Array<Individuo> = []

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }
    agregarIntegrante(individuoNuevo:Individuo){
        this.integrantes.push(individuoNuevo)
    }
    eliminarIntegrante(borrado:Individuo){
        this.delete(borrado, this.integrantes)
      }
    delete(individual: Individuo, colecccionIndividual: Individuo[]) {
        _.remove(colecccionIndividual, individual)
    }
}


 