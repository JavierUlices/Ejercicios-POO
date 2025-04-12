"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
var Participant = /** @class */ (function () {
    function Participant(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    Participant.prototype.recibirNotificacion = function (mensaje) {
        console.log("Enviando notificaci\u00F3n a ".concat(this.nombre, ": ").concat(mensaje));
    };
    return Participant;
}());
exports.Participant = Participant;
