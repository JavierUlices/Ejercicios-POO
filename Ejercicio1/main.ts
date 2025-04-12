import { Conference } from './conference';
import { Concert } from './concert';
import { Wedding } from './wedding';
import { NotificationService } from './notificationService';
import { TicketService } from './ticketService';
import { ServiceProvider } from './serviceProvider';
import { Participant } from './participant';
import { Resource } from './resource';
import { Activity } from './activity';
import { validarFecha } from './validation';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para solicitar datos al usuario
function solicitarDatos(pregunta: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

(async () => {
    // Solicitar datos para crear un evento
    const tipoEvento = await solicitarDatos('Ingrese el tipo de evento (conferencia, concierto, boda): ');
    const fechaEventoInput = await solicitarDatos('Ingrese la fecha del evento (YYYY-MM-DD): ');
    const ubicacionEvento = await solicitarDatos('Ingrese la ubicación del evento: ');
    const capacidadEvento = parseInt(await solicitarDatos('Ingrese la capacidad del evento: '));
    const presupuestoEvento = parseFloat(await solicitarDatos('Ingrese el presupuesto del evento: '));

    const fechaEvento = new Date(fechaEventoInput);

    try {
        validarFecha(fechaEvento);

        let evento;
        switch (tipoEvento.toLowerCase()) {
            case 'conferencia':
                evento = new Conference(fechaEvento, ubicacionEvento, capacidadEvento, presupuestoEvento);
                break;
            case 'concierto':
                evento = new Concert(fechaEvento, ubicacionEvento, capacidadEvento, presupuestoEvento);
                break;
            case 'boda':
                evento = new Wedding(fechaEvento, ubicacionEvento, capacidadEvento, presupuestoEvento);
                break;
            default:
                throw new Error('Tipo de evento no válido.');
        }

        // Ejemplo de uso de servicios y modelos
        const notificacionService = new NotificationService();
        const ticketService = new TicketService();
        const proveedor = new ServiceProvider('Catering XYZ', 'Catering');
        const participante = new Participant('Juan Pérez', 'juan@example.com');
        const recurso = new Resource('Sillas', 100);
        const actividad = new Activity('Conferencia Principal', '10:00 AM');

        evento.venderEntradas();
        evento.asignarAsientos();
        evento.generarCredenciales();

        notificacionService.enviarNotificacion('El evento está por comenzar.');
        ticketService.venderEntrada(tipoEvento, 5); // Corregido a venderEntrada
        ticketService.asignarAsiento(tipoEvento, 'A1'); // Corregido a asignarAsiento
        proveedor.proveerServicio();
        participante.recibirNotificacion('Tu entrada ha sido confirmada.');
        recurso.usarRecurso();
        actividad.realizarActividad();

    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
})();
