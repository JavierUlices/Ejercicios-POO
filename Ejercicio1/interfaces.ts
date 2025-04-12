export interface Event {
    fecha: Date;
    ubicacion: string;
    capacidad: number;
    presupuesto: number;
    venderEntradas(): void;
    asignarAsientos(): void;
    generarCredenciales(): void;
}

export interface Notificable {
    enviarNotificacion(mensaje: string): void;
}
