import { Dispositivo } from '../interfaces/Dispositivo';

export class Termostato implements Dispositivo {
    private estado: boolean;
    private consumoEnergetico: number;
    private ubicacion: string;
    private temperatura: number;

    constructor(ubicacion: string) {
        this.estado = false;
        this.consumoEnergetico = 0;
        this.ubicacion = ubicacion;
        this.temperatura = 22;  
    }

    encender(): void {
        this.estado = true;
        this.consumoEnergetico = 50;  
    }

    apagar(): void {
        this.estado = false;
        this.consumoEnergetico = 0;
    }

    obtenerEstado(): string {
        return this.estado ? "Encendido" : "Apagado";
    }

    obtenerConsumoEnergetico(): number {
        return this.consumoEnergetico;
    }

    obtenerUbicacion(): string {
        return this.ubicacion;
    }

    ajustarTemperatura(temperatura: number): void {
        this.temperatura = temperatura;
    }
}
