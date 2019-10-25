import { Usuario } from './usuario'
import { Individuo} from './Individuo'
export class Equipo {

    constructor(public id?: number, public nombre?: string, public lider?: Usuario, public propietario?: Individuo,
        public integrantes?: Usuario[]) { }

    static fromJson(equipoJSON): Equipo {
        return Object.assign(new Equipo(), equipoJSON)
    }

    esUnIntegrante(individuo: Usuario): boolean {
        return this.integrantes.includes(individuo)
    }

    esPropietario(individuo: Individuo): boolean {
        return this.propietario === individuo
    }
    esLider(individuo: Usuario): boolean {
        return this.lider === individuo
    }

    eliminarIntregrante(individuo: Usuario) {
        if (this.esUnIntegrante(individuo)) {
            return this.integrantes.splice(this.integrantes.indexOf(individuo), 1)
        }
    }

    agregarIntegrante(individuo: Usuario) {
        return this.integrantes.push(individuo)
    }

    asignarPropietario(individuo: Individuo) {
        return this.propietario == individuo
    }

    designarPropietario() {
        return this.propietario == null
    }
    asignarLider(individuo: Usuario) {
        return this.lider == individuo
    }

    designarLider() {
        return this.propietario == null
    }
    toJSON(): any {
        return {
            ...this,
            // asignadoA: this.asignatario ? this.asignatario.nombre : ''
        }
    }

}
