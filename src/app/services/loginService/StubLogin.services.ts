import { Individuo } from 'src/app/domain/Individuo';


export class StubLogin  {
    Usuarios = [
        new Individuo('1', 'Hulk', ),
        new Individuo('2', 'Batman',),
        new Individuo('3', 'Superman',),
        new Individuo('4', 'Robin',),
    ]

    async todasLasUsuarios() {
        return this.Usuarios
    }

    async getTareaById(id: string) {
        return this.Usuarios.find((usuario) => usuario.id === id)
    }

    actualizarTarea(usuario: Individuo) { }
}