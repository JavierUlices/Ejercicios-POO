"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitoreo = void 0;
var Monitoreo = /** @class */ (function () {
    function Monitoreo() {
        this.dispositivos = [];
    }
    Monitoreo.prototype.agregarDispositivo = function (dispositivo) {
        this.dispositivos.push(dispositivo);
    };
    Monitoreo.prototype.generarInforme = function () {
        this.dispositivos.forEach(function (dispositivo) {
            console.log("Dispositivo en ".concat(dispositivo.obtenerUbicacion(), ": ").concat(dispositivo.obtenerEstado(), ", Consumo: ").concat(dispositivo.obtenerConsumoEnergetico(), "W"));
        });
    };
    return Monitoreo;
}());
exports.Monitoreo = Monitoreo;
