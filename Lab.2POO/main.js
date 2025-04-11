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
var Animal_1 = require("./Models/Animal");
var plant_1 = require("./Models/plant");
var organismos_1 = require("./services/organismos");
var validacion_1 = require("./utils/validacion");
var EcosystemCLI = /** @class */ (function () {
    function EcosystemCLI() {
        this.ecosystem = new organismos_1.EcosystemService();
    }
    EcosystemCLI.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var continueAdding, name_1, lifespan, _a, reproductionRate, _b, foodNeeds, _c, type, organism, addMore;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log("Bienvenido al Simulador de Ecosistema");
                        continueAdding = true;
                        _d.label = 1;
                    case 1:
                        if (!continueAdding) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.ask("Nombre del organismo: ")];
                    case 2:
                        name_1 = _d.sent();
                        _a = parseFloat;
                        return [4 /*yield*/, this.ask("Esperanza de vida (en años): ")];
                    case 3:
                        lifespan = _a.apply(void 0, [_d.sent()]);
                        _b = parseFloat;
                        return [4 /*yield*/, this.ask("Tasa de reproducción: ")];
                    case 4:
                        reproductionRate = _b.apply(void 0, [_d.sent()]);
                        _c = parseFloat;
                        return [4 /*yield*/, this.ask("Necesidades alimenticias: ")];
                    case 5:
                        foodNeeds = _c.apply(void 0, [_d.sent()]);
                        return [4 /*yield*/, this.ask("¿Es un Animal o una Planta? (escribe 'animal' o 'planta'): ")];
                    case 6:
                        type = _d.sent();
                        try {
                            (0, validacion_1.validateInput)(lifespan);
                            (0, validacion_1.validateInput)(reproductionRate);
                            (0, validacion_1.validateInput)(foodNeeds);
                            organism = void 0;
                            if (type === "animal") {
                                organism = new Animal_1.Animal(name_1, lifespan, reproductionRate, foodNeeds);
                            }
                            else if (type === "planta") {
                                organism = new plant_1.Plant(name_1, lifespan, reproductionRate, foodNeeds);
                            }
                            else {
                                console.log("Tipo inválido. Usa 'animal' o 'planta'.");
                                return [3 /*break*/, 1];
                            }
                            this.ecosystem.addOrganism(organism);
                            console.log("Organismo agregado: ".concat(name_1));
                        }
                        catch (error) {
                            console.error("Error:", error.message);
                        }
                        return [4 /*yield*/, this.ask("¿Deseas agregar otro organismo? (sí/no): ")];
                    case 7:
                        addMore = _d.sent();
                        continueAdding = addMore === "sí";
                        return [3 /*break*/, 1];
                    case 8:
                        console.log("Iniciando simulación...");
                        this.ecosystem.simulateCycle();
                        this.ecosystem.generateStatistics();
                        return [2 /*return*/];
                }
            });
        });
    };
    EcosystemCLI.prototype.ask = function (question) {
        return new Promise(function (resolve) {
            process.stdout.write(question);
            process.stdin.once("data", function (data) { return resolve(data.toString().trim()); });
        });
    };
    return EcosystemCLI;
}());
var cli = new EcosystemCLI();
cli.start();
