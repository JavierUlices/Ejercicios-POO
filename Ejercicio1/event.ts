import { Event as IEvent } from './event';

export abstract class Event implements IEvent {
    fecha: Date;
    ubicacion: string;
    capacidad: number;
    presupuesto: number;

    constructor(fecha: Date, ubicacion: string, capacidad: number, presupuesto: number) {
        this.fecha = fecha;
        this.ubicacion = ubicacion;
        this.capacidad = capacidad;
        this.presupuesto = presupuesto;
    }

    abstract venderEntradas(): void;
    abstract asignarAsientos(): void;
    abstract generarCredenciales(): void;
}
