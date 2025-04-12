"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
var Activity = /** @class */ (function () {
    function Activity(nombre, hora) {
        this.nombre = nombre;
        this.hora = hora;
    }
    Activity.prototype.realizarActividad = function () {
        console.log("Realizando actividad: ".concat(this.nombre, " a las ").concat(this.hora, "."));
    };
    return Activity;
}());
exports.Activity = Activity;
