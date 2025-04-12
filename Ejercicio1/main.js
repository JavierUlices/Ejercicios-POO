"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var conference_1 = require("./conference");
var concert_1 = require("./concert");
var wedding_1 = require("./wedding");
var notificationService_1 = require("./notificationService");
var ticketService_1 = require("./ticketService");
var serviceProvider_1 = require("./serviceProvider");
var participant_1 = require("./participant");
var resource_1 = require("./resource");
var activity_1 = require("./activity");
var validation_1 = require("./validation");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Función para solicitar datos al usuario
function solicitarDatos(pregunta) {
    return new Promise(function (resolve) {
        rl.question(pregunta, function (respuesta) {
            resolve(respuesta);
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var tipoEvento, fechaEventoInput, ubicacionEvento, capacidadEvento, _a, presupuestoEvento, _b, fechaEvento, evento, notificacionService, ticketService, proveedor, participante, recurso, actividad;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, solicitarDatos('Ingrese el tipo de evento (conferencia, concierto, boda): ')];
            case 1:
                tipoEvento = _c.sent();
                return [4 /*yield*/, solicitarDatos('Ingrese la fecha del evento (YYYY-MM-DD): ')];
            case 2:
                fechaEventoInput = _c.sent();
                return [4 /*yield*/, solicitarDatos('Ingrese la ubicación del evento: ')];
            case 3:
                ubicacionEvento = _c.sent();
                _a = parseInt;
                return [4 /*yield*/, solicitarDatos('Ingrese la capacidad del evento: ')];
            case 4:
                capacidadEvento = _a.apply(void 0, [_c.sent()]);
                _b = parseFloat;
                return [4 /*yield*/, solicitarDatos('Ingrese el presupuesto del evento: ')];
            case 5:
                presupuestoEvento = _b.apply(void 0, [_c.sent()]);
                fechaEvento = new Date(fechaEventoInput);
                try {
                    (0, validation_1.validarFecha)(fechaEvento);
                    evento = void 0;
                    switch (tipoEvento.toLowerCase()) {
                        case 'conferencia':
                            evento = new conference_1.Conference(fechaEvento, ubicacionEvento, capacidadEvento, presupuestoEvento);
                            break;
                        case 'concierto':
                            evento = new concert_1.Concert(fechaEvento, ubicacionEvento, capacidadEvento, presupuestoEvento);
                            break;
                        case 'boda':
                            evento = new wedding_1.Wedding(fechaEvento, ubicacionEvento, capacidadEvento, presupuestoEvento);
                            break;
                        default:
                            throw new Error('Tipo de evento no válido.');
                    }
                    notificacionService = new notificationService_1.NotificationService();
                    ticketService = new ticketService_1.TicketService();
                    proveedor = new serviceProvider_1.ServiceProvider('Catering XYZ', 'Catering');
                    participante = new participant_1.Participant('Juan Pérez', 'juan@example.com');
                    recurso = new resource_1.Resource('Sillas', 100);
                    actividad = new activity_1.Activity('Conferencia Principal', '10:00 AM');
                    evento.venderEntradas();
                    evento.asignarAsientos();
                    evento.generarCredenciales();
                    notificacionService.enviarNotificacion('El evento está por comenzar.');
                    ticketService.venderEntrada(tipoEvento, 5); // Corregido a venderEntrada
                    ticketService.asignarAsiento(tipoEvento, 'A1'); // Corregido a asignarAsiento
                    proveedor.proveerServicio();
                    participante.recibirNotificacion('Tu entrada ha sido confirmada.');
                    recurso.usarRecurso();
                    actividad.realizarActividad();
                }
                catch (error) {
                    console.error(error.message);
                }
                finally {
                    rl.close();
                }
                return [2 /*return*/];
        }
    });
}); })();
