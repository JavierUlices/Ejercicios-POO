"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = void 0;
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(nombre, servicio) {
        this.nombre = nombre;
        this.servicio = servicio;
    }
    ServiceProvider.prototype.proveerServicio = function () {
        console.log("".concat(this.nombre, " est\u00E1 proveyendo el servicio de ").concat(this.servicio, "."));
    };
    return ServiceProvider;
}());
exports.ServiceProvider = ServiceProvider;
