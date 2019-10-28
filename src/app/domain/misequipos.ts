
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
    public integrantes: Individuo[] = []

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }
}


