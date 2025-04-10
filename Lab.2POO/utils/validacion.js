"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = validateInput;
var excepcionesPersonalizada_1 = require("../exceptions/excepcionesPersonalizada");
function validateInput(value) {
    if (value <= 0) {
        throw new excepcionesPersonalizada_1.ValidationException("El valor debe ser mayor a 0");
    }
}
