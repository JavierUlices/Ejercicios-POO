import { Dispositivo } from '../interfaces/Dispositivo';

export class Camara implements Dispositivo {
    private estado: boolean;
    private consumoEnergetico: number;
    private ubicacion: string;

    constructor(ubicacion: string) {
        this.estado = false;
        this.consumoEnergetico = 0;
        this.ubicacion = ubicacion;
    }

    encender(): void {
        this.estado = true;
        this.consumoEnergetico = 15; // Consumo en Watts
    }

    apagar(): void {
        this.estado = false;
        this.consumoEnergetico = 0;
    }

    obtenerEstado(): string {
        return this.estado ? "Grabando" : "Apagado";
    }

    obtenerConsumoEnergetico(): number {
        return this.consumoEnergetico;
    }

    obtenerUbicacion(): string {
        return this.ubicacion;
    }
}
