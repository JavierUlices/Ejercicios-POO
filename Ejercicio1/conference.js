"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conference = void 0;
var event_1 = require("./event");
var Conference = /** @class */ (function (_super) {
    __extends(Conference, _super);
    function Conference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Conference.prototype.venderEntradas = function () {
        console.log("Vendiendo entradas para la conferencia.");
    };
    Conference.prototype.asignarAsientos = function () {
        console.log("Asignando asientos para la conferencia.");
    };
    Conference.prototype.generarCredenciales = function () {
        console.log("Generando credenciales para la conferencia.");
    };
    return Conference;
}(event_1.Event));
exports.Conference = Conference;
