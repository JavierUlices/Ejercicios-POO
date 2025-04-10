export interface Dispositivo {
    encender(): void;
    apagar(): void;
    obtenerEstado(): string;
    obtenerConsumoEnergetico(): number;
    obtenerUbicacion(): string;
}
