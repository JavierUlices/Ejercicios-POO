import { Dispositivo } from '../interfaces/Dispositivo';

export class Escenario {
    private nombre: string;
    private dispositivos: Map<Dispositivo, string>; // Mapa de dispositivos y acciones ("encender" o "apagar")

    constructor(nombre: string) {
        this.nombre = nombre;
        this.dispositivos = new Map();
    }

    agregarDispositivo(dispositivo: Dispositivo, accion: string): void {
        this.dispositivos.set(dispositivo, accion);
    }

    aplicar(): void {
        console.log(`Aplicando escenario: ${this.nombre}`);
        this.dispositivos.forEach((accion, dispositivo) => {
            if (accion === "encender") {
                dispositivo.encender();
            } else if (accion === "apagar") {
                dispositivo.apagar();
            }
        });
    }
}
