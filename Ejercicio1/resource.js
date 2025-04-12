"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
var Resource = /** @class */ (function () {
    function Resource(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    Resource.prototype.usarRecurso = function () {
        if (this.cantidad > 0) {
            this.cantidad--;
            console.log("Usando recurso: ".concat(this.nombre, ". Quedan ").concat(this.cantidad, " unidades."));
        }
        else {
            console.log("Recurso ".concat(this.nombre, " agotado."));
        }
    };
    return Resource;
}());
exports.Resource = Resource;
