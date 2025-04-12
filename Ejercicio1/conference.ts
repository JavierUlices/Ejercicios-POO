import { Event } from './event';

export class Conference extends Event {
    venderEntradas(): void {
        console.log("Vendiendo entradas para la conferencia.");
    }

    asignarAsientos(): void {
        console.log("Asignando asientos para la conferencia.");
    }

    generarCredenciales(): void {
        console.log("Generando credenciales para la conferencia.");
    }
}
