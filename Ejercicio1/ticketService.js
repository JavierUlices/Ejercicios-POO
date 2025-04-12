"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
var TicketService = /** @class */ (function () {
    function TicketService() {
    }
    TicketService.prototype.venderEntrada = function (evento, cantidad) {
        console.log("Vendiendo ".concat(cantidad, " entradas para el evento: ").concat(evento));
    };
    TicketService.prototype.asignarAsiento = function (evento, asiento) {
        console.log("Asignando asiento ".concat(asiento, " para el evento: ").concat(evento));
    };
    return TicketService;
}());
exports.TicketService = TicketService;
