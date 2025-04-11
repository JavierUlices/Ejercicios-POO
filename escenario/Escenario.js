"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escenario = void 0;
var Escenario = /** @class */ (function () {
    function Escenario(nombre) {
        this.nombre = nombre;
        this.dispositivos = new Map();
    }
    Escenario.prototype.agregarDispositivo = function (dispositivo, accion) {
        this.dispositivos.set(dispositivo, accion);
    };
    Escenario.prototype.aplicar = function () {
        console.log("Aplicando escenario: ".concat(this.nombre));
        this.dispositivos.forEach(function (accion, dispositivo) {
            if (accion === "encender") {
                dispositivo.encender();
            }
            else if (accion === "apagar") {
                dispositivo.apagar();
            }
        });
    };
    return Escenario;
}());
exports.Escenario = Escenario;
