import { Dispositivo } from '../interfaces/Dispositivo';

export class ValidacionError extends Error {
    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ValidacionError";
    }
}

export function validarDispositivo(dispositivo: Dispositivo): void {
    if (!dispositivo) {
        throw new ValidacionError("El dispositivo no puede ser nulo.");
    }
}
