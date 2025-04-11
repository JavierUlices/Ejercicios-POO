"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Termostato = void 0;
var Termostato = /** @class */ (function () {
    function Termostato(ubicacion) {
        this.estado = false;
        this.consumoEnergetico = 0;
        this.ubicacion = ubicacion;
        this.temperatura = 22;
    }
    Termostato.prototype.encender = function () {
        this.estado = true;
        this.consumoEnergetico = 50;
    };
    Termostato.prototype.apagar = function () {
        this.estado = false;
        this.consumoEnergetico = 0;
    };
    Termostato.prototype.obtenerEstado = function () {
        return this.estado ? "Encendido" : "Apagado";
    };
    Termostato.prototype.obtenerConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Termostato.prototype.obtenerUbicacion = function () {
        return this.ubicacion;
    };
    Termostato.prototype.ajustarTemperatura = function (temperatura) {
        this.temperatura = temperatura;
    };
    return Termostato;
}());
exports.Termostato = Termostato;
