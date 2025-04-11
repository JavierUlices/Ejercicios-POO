import { Dispositivo } from '../interfaces/Dispositivo';

export class Rutina {
    private nombre: string;
    private dispositivos: Dispositivo[];
    private horario: Date;
    private condicion: string;

    constructor(nombre: string, horario: Date, condicion: string = "") {
        this.nombre = nombre;
        this.dispositivos = [];
        this.horario = horario;
        this.condicion = condicion;
    }

    agregarDispositivo(dispositivo: Dispositivo): void {
        this.dispositivos.push(dispositivo);
    }

    ejecutar(): void {
        console.log(`Ejecutando rutina: ${this.nombre}`);
        this.dispositivos.forEach(dispositivo => dispositivo.encender());
    }

    obtenerHorario(): Date {
        return this.horario;
    }

    obtenerCondicion(): string {
        return this.condicion;
    }
}
