import { Event } from './event';

export class Wedding extends Event {
    venderEntradas(): void {
        console.log("Vendiendo entradas para la boda.");
    }

    asignarAsientos(): void {
        console.log("Asignando asientos para la boda.");
    }

    generarCredenciales(): void {
        console.log("Generando credenciales para la boda.");
    }
}
