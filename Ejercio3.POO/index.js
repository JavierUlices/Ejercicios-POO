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
var Luz_1 = require("../Ejercio3.POO/Luz");
var Termostato_1 = require("../Ejercio3.POO/Termostato");
var Cerradura_1 = require("../Ejercio3.POO/Cerradura");
var Camara_1 = require("../Ejercio3.POO/Camara");
var Rutinas_1 = require("../Ejercio3.POO/Rutinas");
var Escenario_1 = require("../escenario/Escenario");
var Monitoreo_1 = require("../Ejercio3.POO/Monitoreo");
var Validaciones_1 = require("../Ejercio3.POO/Validaciones");
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
    var ubicacionLuz, ubicacionTermostato, ubicacionCerradura, ubicacionCamara, luzSala, termostatoHabitacion, cerraduraPuertaPrincipal, camaraExterior, horarioRutina, rutinaManana, escenarioNocturno, monitoreo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, solicitarDatos('Ingrese la ubicación de la luz: ')];
            case 1:
                ubicacionLuz = _a.sent();
                return [4 /*yield*/, solicitarDatos('Ingrese la ubicación del termostato: ')];
            case 2:
                ubicacionTermostato = _a.sent();
                return [4 /*yield*/, solicitarDatos('Ingrese la ubicación de la cerradura: ')];
            case 3:
                ubicacionCerradura = _a.sent();
                return [4 /*yield*/, solicitarDatos('Ingrese la ubicación de la cámara: ')];
            case 4:
                ubicacionCamara = _a.sent();
                luzSala = new Luz_1.Luz(ubicacionLuz);
                termostatoHabitacion = new Termostato_1.Termostato(ubicacionTermostato);
                cerraduraPuertaPrincipal = new Cerradura_1.Cerradura(ubicacionCerradura);
                camaraExterior = new Camara_1.Camara(ubicacionCamara);
                horarioRutina = new Date();
                horarioRutina.setHours(7, 0, 0); // 7 AM
                rutinaManana = new Rutinas_1.Rutina("Rutina de la Mañana", horarioRutina);
                rutinaManana.agregarDispositivo(luzSala);
                rutinaManana.agregarDispositivo(termostatoHabitacion);
                escenarioNocturno = new Escenario_1.Escenario("Modo Nocturno");
                escenarioNocturno.agregarDispositivo(luzSala, "apagar");
                escenarioNocturno.agregarDispositivo(termostatoHabitacion, "apagar");
                escenarioNocturno.agregarDispositivo(cerraduraPuertaPrincipal, "encender");
                monitoreo = new Monitoreo_1.Monitoreo();
                monitoreo.agregarDispositivo(luzSala);
                monitoreo.agregarDispositivo(termostatoHabitacion);
                monitoreo.agregarDispositivo(cerraduraPuertaPrincipal);
                monitoreo.agregarDispositivo(camaraExterior);
                try {
                    (0, Validaciones_1.validarDispositivo)(luzSala);
                    // Ejecutar rutina
                    rutinaManana.ejecutar();
                    // Aplicar escenario
                    escenarioNocturno.aplicar();
                    // Monitorear en tiempo real
                    monitoreo.monitorearEnTiempoReal();
                    // Generar informe de consumo energético
                    monitoreo.generarInforme();
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
