import { Usuario } from './usuario'
import { Individuo, Entidad} from './Individuo'
export class Equipo implements Entidad{

    constructor(public id?: string, public nombre?: string, public ownerId?: string, public owner?: string, public lider?: string) { }

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

}

export class EquipoComplete {
    constructor(public id?: string, public nombre?: string, public ownerId?: string, public owner?: string, public lider?: Individuo) { }

}


