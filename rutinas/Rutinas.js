"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rutina = void 0;
var Rutina = /** @class */ (function () {
    function Rutina(nombre, horario) {
        this.nombre = nombre;
        this.dispositivos = [];
        this.horario = horario;
    }
    Rutina.prototype.agregarDispositivo = function (dispositivo) {
        this.dispositivos.push(dispositivo);
    };
    Rutina.prototype.ejecutar = function () {
        this.dispositivos.forEach(function (dispositivo) { return dispositivo.encender(); });
    };
    return Rutina;
}());
exports.Rutina = Rutina;
