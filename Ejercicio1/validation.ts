export class ValidationError extends Error {
    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ValidationError";
    }
}

export function validarFecha(fecha: Date): void {
    if (fecha < new Date()) {
        throw new ValidationError("La fecha del evento no puede ser en el pasado.");
    }
}
