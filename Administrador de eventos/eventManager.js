"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
class EventManager {
    constructor() {
        this.eventos = [];
        this.idCounter = 1;
    }
    crearEvento(data) {
        try {
            this.validarEvento(data);
            const nuevoEvento = Object.assign(Object.assign({}, data), { id: this.idCounter++, participantes: [], proveedores: [], actividades: [] });
            this.eventos.push(nuevoEvento);
            return nuevoEvento;
        }
        catch (error) {
            throw new Error(`Error al crear evento: ${error}`);
        }
    }
    agregarParticipante(eventoId, participante) {
        const evento = this.obtenerEvento(eventoId);
        if (evento.participantes.length >= evento.capacidad) {
            throw new Error('Capacidad del evento alcanzada.');
        }
        evento.participantes.push(participante);
        this.enviarNotificacion(participante.email, `Registrado al evento: ${evento.nombre}`);
    }
    agregarProveedor(eventoId, proveedor) {
        const evento = this.obtenerEvento(eventoId);
        evento.proveedores.push(proveedor);
    }
    agregarActividad(eventoId, actividad) {
        const evento = this.obtenerEvento(eventoId);
        evento.actividades.push(actividad);
    }
    venderEntrada(eventoId, participante) {
        this.agregarParticipante(eventoId, participante);
        participante.asiento = this.generarAsiento();
        console.log(`Entrada vendida a ${participante.nombre}, asiento #${participante.asiento}`);
    }
    generarCredencial(participante) {
        var _a;
        return `Credencial: ${participante.nombre.toUpperCase()} | Asiento #${(_a = participante.asiento) !== null && _a !== void 0 ? _a : 'N/A'}`;
    }
    obtenerEvento(id) {
        const evento = this.eventos.find(e => e.id === id);
        if (!evento)
            throw new Error('Evento no encontrado.');
        return evento;
    }
    generarAsiento() {
        return Math.floor(Math.random() * 1000);
    }
    enviarNotificacion(email, mensaje) {
        console.log(`Notificación enviada a ${email}: ${mensaje}`);
    }
    validarEvento(data) {
        if (!data.nombre || !data.fecha || !data.ubicacion || data.capacidad <= 0 || data.presupuesto <= 0) {
            throw new Error('Datos de evento inválidos.');
        }
    }
}
exports.EventManager = EventManager;
