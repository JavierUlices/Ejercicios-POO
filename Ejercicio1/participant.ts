export class Participant {
    private nombre: string;
    private email: string;

    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }

    recibirNotificacion(mensaje: string): void {
        console.log(`Enviando notificación a ${this.nombre}: ${mensaje}`);
    }
}
