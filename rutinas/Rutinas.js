"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rutina = void 0;
var Rutina = /** @class */ (function () {
    function Rutina(nombre, horario, condicion) {
        if (condicion === void 0) { condicion = ""; }
        this.nombre = nombre;
        this.dispositivos = [];
        this.horario = horario;
        this.condicion = condicion;
    }
    Rutina.prototype.agregarDispositivo = function (dispositivo) {
        this.dispositivos.push(dispositivo);
    };
    Rutina.prototype.ejecutar = function () {
        console.log("Ejecutando rutina: ".concat(this.nombre));
        this.dispositivos.forEach(function (dispositivo) { return dispositivo.encender(); });
    };
    Rutina.prototype.obtenerHorario = function () {
        return this.horario;
    };
    Rutina.prototype.obtenerCondicion = function () {
        return this.condicion;
    };
    return Rutina;
}());
exports.Rutina = Rutina;
