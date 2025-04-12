import { Notificable } from './interfaces';

export class NotificationService implements Notificable {
    enviarNotificacion(mensaje: string): void {
        console.log(`Enviando notificación: ${mensaje}`);
    }
}
