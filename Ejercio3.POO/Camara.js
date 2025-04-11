"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camara = void 0;
var Camara = /** @class */ (function () {
    function Camara(ubicacion) {
        this.estado = false;
        this.consumoEnergetico = 0;
        this.ubicacion = ubicacion;
    }
    Camara.prototype.encender = function () {
        this.estado = true;
        this.consumoEnergetico = 15; // Consumo en Watts
    };
    Camara.prototype.apagar = function () {
        this.estado = false;
        this.consumoEnergetico = 0;
    };
    Camara.prototype.obtenerEstado = function () {
        return this.estado ? "Grabando" : "Apagado";
    };
    Camara.prototype.obtenerConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Camara.prototype.obtenerUbicacion = function () {
        return this.ubicacion;
    };
    return Camara;
}());
exports.Camara = Camara;
