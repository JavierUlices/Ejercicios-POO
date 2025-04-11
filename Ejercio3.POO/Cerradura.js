"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cerradura = void 0;
var Cerradura = /** @class */ (function () {
    function Cerradura(ubicacion) {
        this.estado = false;
        this.consumoEnergetico = 0;
        this.ubicacion = ubicacion;
    }
    Cerradura.prototype.encender = function () {
        this.estado = true;
        this.consumoEnergetico = 5;
    };
    Cerradura.prototype.apagar = function () {
        this.estado = false;
        this.consumoEnergetico = 0;
    };
    Cerradura.prototype.obtenerEstado = function () {
        return this.estado ? "Abierto" : "Cerrado";
    };
    Cerradura.prototype.obtenerConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Cerradura.prototype.obtenerUbicacion = function () {
        return this.ubicacion;
    };
    return Cerradura;
}());
exports.Cerradura = Cerradura;
