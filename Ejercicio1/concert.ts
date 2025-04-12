import { Event } from './event';

export class Concert extends Event {
    venderEntradas(): void {
        console.log("Vendiendo entradas para el concierto.");
    }

    asignarAsientos(): void {
        console.log("Asignando asientos para el concierto.");
    }

    generarCredenciales(): void {
        console.log("Generando credenciales para el concierto.");
    }
}
