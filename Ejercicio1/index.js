"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventManager_1 = require("./eventManager");
var manager = new eventManager_1.EventManager();
var evento = manager.crearEvento({
    tipo: 'Concierto',
    nombre: 'RockFest 2025',
    fecha: new Date('2025-06-01'),
    ubicacion: 'Estadio Nacional',
    capacidad: 5000,
    presupuesto: 100000,
    recursos: ['Escenario', 'Luces', 'Sonido'],
});
manager.venderEntrada(evento.id, { id: 1, nombre: 'Carlos Pérez', email: 'carlos@example.com' });
var credencial = manager.generarCredencial({ id: 1, nombre: 'Carlos Pérez', email: 'carlos@example.com', asiento: 123 });
console.log(credencial);
