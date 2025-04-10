import { Dispositivo } from '../interfaces/Dispositivo';

export class Rutina {
    private nombre: string;
    private dispositivos: Dispositivo[];
    private horario: Date;

    constructor(nombre: string, horario: Date) {
        this.nombre = nombre;
        this.dispositivos = [];
        this.horario = horario;
    }

    agregarDispositivo(dispositivo: Dispositivo): void {
        this.dispositivos.push(dispositivo);
    }

    ejecutar(): void {
        this.dispositivos.forEach(dispositivo => dispositivo.encender());
    }
}
