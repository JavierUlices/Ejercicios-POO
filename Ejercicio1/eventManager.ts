import { Event, Participant, ServiceProvider, Activity } from './types';

export class EventManager {
  private eventos: Event[] = [];
  private idCounter = 1;

  crearEvento(data: Omit<Event, 'id' | 'participantes' | 'proveedores' | 'actividades'>): Event {
    try {
      this.validarEvento(data);
      const nuevoEvento: Event = {
        ...data,
        id: this.idCounter++,
        participantes: [],
        proveedores: [],
        actividades: [],
      };
      this.eventos.push(nuevoEvento);
      return nuevoEvento;
    } catch (error) {
      throw new Error(`Error al crear evento: ${error}`);
    }
  }

  agregarParticipante(eventoId: number, participante: Participant): void {
    const evento = this.obtenerEvento(eventoId);
    if (evento.participantes.length >= evento.capacidad) {
      throw new Error('Capacidad del evento alcanzada.');
    }
    evento.participantes.push(participante);
    this.enviarNotificacion(participante.email, `Registrado al evento: ${evento.nombre}`);
  }

  agregarProveedor(eventoId: number, proveedor: ServiceProvider): void {
    const evento = this.obtenerEvento(eventoId);
    evento.proveedores.push(proveedor);
  }

  agregarActividad(eventoId: number, actividad: Activity): void {
    const evento = this.obtenerEvento(eventoId);
    evento.actividades.push(actividad);
  }

  venderEntrada(eventoId: number, participante: Participant): void {
    this.agregarParticipante(eventoId, participante);
    participante.asiento = this.generarAsiento();
    console.log(`Entrada vendida a ${participante.nombre}, asiento #${participante.asiento}`);
  }

  generarCredencial(participante: Participant): string {
    return `Credencial: ${participante.nombre.toUpperCase()} | Asiento #${participante.asiento ?? 'N/A'}`;
  }

  private obtenerEvento(id: number): Event {
    const evento = this.eventos.find(e => e.id === id);
    if (!evento) throw new Error('Evento no encontrado.');
    return evento;
  }

  private generarAsiento(): number {
    return Math.floor(Math.random() * 1000);
  }

  private enviarNotificacion(email: string, mensaje: string): void {
    console.log(`Notificación enviada a ${email}: ${mensaje}`);
  }

  private validarEvento(data: Omit<Event, 'id' | 'participantes' | 'proveedores' | 'actividades'>): void {
    if (!data.nombre || !data.fecha || !data.ubicacion || data.capacidad <= 0 || data.presupuesto <= 0) {
      throw new Error('Datos de evento inválidos.');
    }
  }
}