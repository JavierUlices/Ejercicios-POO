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
        console.log("Informe de Consumo Energético:");
        this.dispositivos.forEach(dispositivo => {
            console.log(`Dispositivo en ${dispositivo.obtenerUbicacion()}: ${dispositivo.obtenerEstado()}, Consumo: ${dispositivo.obtenerConsumoEnergetico()}W`);
        });
    }

    monitorearEnTiempoReal(): void {
        console.log("Monitoreo en Tiempo Real:");
        this.dispositivos.forEach(dispositivo => {
            console.log(`${dispositivo.obtenerUbicacion()}: ${dispositivo.obtenerEstado()}, Consumo: ${dispositivo.obtenerConsumoEnergetico()}W`);
        });
    }
}
