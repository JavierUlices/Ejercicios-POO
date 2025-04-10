import { Dispositivo } from '../interfaces/Dispositivo';

export class Monitoreo {
    private dispositivos: Dispositivo[];

    constructor() {
        this.dispositivos = [];
    }

    agregarDispositivo(dispositivo: Dispositivo): void {
        this.dispositivos.push(dispositivo);
    }

    generarInforme(): void {
        this.dispositivos.forEach(dispositivo => {
            console.log(`Dispositivo en ${dispositivo.obtenerUbicacion()}: ${dispositivo.obtenerEstado()}, Consumo: ${dispositivo.obtenerConsumoEnergetico()}W`);
        });
    }
}
