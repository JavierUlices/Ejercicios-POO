"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.enviarNotificacion = function (mensaje) {
        console.log("Enviando notificaci\u00F3n: ".concat(mensaje));
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;
