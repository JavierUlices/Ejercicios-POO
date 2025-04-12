export class ServiceProvider {
    private nombre: string;
    private servicio: string;

    constructor(nombre: string, servicio: string) {
        this.nombre = nombre;
        this.servicio = servicio;
    }

    proveerServicio(): void {
        console.log(`${this.nombre} está proveyendo el servicio de ${this.servicio}.`);
    }
}
