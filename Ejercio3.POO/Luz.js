"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luz = void 0;
var Luz = /** @class */ (function () {
    function Luz(ubicacion) {
        this.estado = false;
        this.consumoEnergetico = 0;
        this.ubicacion = ubicacion;
    }
    Luz.prototype.encender = function () {
        this.estado = true;
        this.consumoEnergetico = 10;
    };
    Luz.prototype.apagar = function () {
        this.estado = false;
        this.consumoEnergetico = 0;
    };
    Luz.prototype.obtenerEstado = function () {
        return this.estado ? "Encendido" : "Apagado";
    };
    Luz.prototype.obtenerConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Luz.prototype.obtenerUbicacion = function () {
        return this.ubicacion;
    };
    return Luz;
}());
exports.Luz = Luz;
