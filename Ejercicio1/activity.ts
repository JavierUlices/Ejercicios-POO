export class Activity {
    private nombre: string;
    private hora: string;

    constructor(nombre: string, hora: string) {
        this.nombre = nombre;
        this.hora = hora;
    }

    realizarActividad(): void {
        console.log(`Realizando actividad: ${this.nombre} a las ${this.hora}.`);
    }
}
