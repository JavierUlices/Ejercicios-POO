"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.eventos = [];
        this.idCounter = 1;
    }
    EventManager.prototype.crearEvento = function (data) {
        try {
            this.validarEvento(data);
            var nuevoEvento = __assign(__assign({}, data), { id: this.idCounter++, participantes: [], proveedores: [], actividades: [] });
            this.eventos.push(nuevoEvento);
            return nuevoEvento;
        }
        catch (error) {
            throw new Error("Error al crear evento: ".concat(error));
        }
    };
    EventManager.prototype.agregarParticipante = function (eventoId, participante) {
        var evento = this.obtenerEvento(eventoId);
        if (evento.participantes.length >= evento.capacidad) {
            throw new Error('Capacidad del evento alcanzada.');
        }
        evento.participantes.push(participante);
        this.enviarNotificacion(participante.email, "Registrado al evento: ".concat(evento.nombre));
    };
    EventManager.prototype.agregarProveedor = function (eventoId, proveedor) {
        var evento = this.obtenerEvento(eventoId);
        evento.proveedores.push(proveedor);
    };
    EventManager.prototype.agregarActividad = function (eventoId, actividad) {
        var evento = this.obtenerEvento(eventoId);
        evento.actividades.push(actividad);
    };
    EventManager.prototype.venderEntrada = function (eventoId, participante) {
        this.agregarParticipante(eventoId, participante);
        participante.asiento = this.generarAsiento();
        console.log("Entrada vendida a ".concat(participante.nombre, ", asiento #").concat(participante.asiento));
    };
    EventManager.prototype.generarCredencial = function (participante) {
        var _a;
        return "Credencial: ".concat(participante.nombre.toUpperCase(), " | Asiento #").concat((_a = participante.asiento) !== null && _a !== void 0 ? _a : 'N/A');
    };
    EventManager.prototype.obtenerEvento = function (id) {
        var evento = this.eventos.find(function (e) { return e.id === id; });
        if (!evento)
            throw new Error('Evento no encontrado.');
        return evento;
    };
    EventManager.prototype.generarAsiento = function () {
        return Math.floor(Math.random() * 1000);
    };
    EventManager.prototype.enviarNotificacion = function (email, mensaje) {
        console.log("Notificaci\u00F3n enviada a ".concat(email, ": ").concat(mensaje));
    };
    EventManager.prototype.validarEvento = function (data) {
        if (!data.nombre || !data.fecha || !data.ubicacion || data.capacidad <= 0 || data.presupuesto <= 0) {
            throw new Error('Datos de evento inválidos.');
        }
    };
    return EventManager;
}());
exports.EventManager = EventManager;
