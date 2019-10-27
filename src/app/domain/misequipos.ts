import { Usuario } from './usuario'
import { Individuo} from './Individuo'
export class Equipo {

    constructor(public id?: string, public nombre?: string, public ownerId?: string, public owner?: string, public lider?: string) { }

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

}


