export class Amigos {
    // "id": String
    // "nombre": String
    // "alcance": number
    // "peso": number
    // "danio": number
    // "resistencia": number
    // "precio": number
    // "sobrenatural": boolean

    constructor(public id?: String, public nombre?: String, public alcance?: number, public peso?: number, 
        public danio?: number, public resistencia?: number, public precio?: number, public sobrenatural?: boolean) { }

    static fromJson(amigosJSON): Amigos {
        return Object.assign(new Amigos(), amigosJSON)
    }
}