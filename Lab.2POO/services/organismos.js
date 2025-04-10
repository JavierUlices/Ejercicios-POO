"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcosystemService = void 0;
var EcosystemService = /** @class */ (function () {
    function EcosystemService() {
        this.organisms = [];
    }
    EcosystemService.prototype.addOrganism = function (organism) {
        this.organisms.push(organism);
    };
    EcosystemService.prototype.simulateCycle = function () {
        console.log("Simulando un ciclo de vida...");
        this.organisms.forEach(function (org) { return org.interactWithEnvironment(); });
    };
    EcosystemService.prototype.generateStatistics = function () {
        console.log("Estadísticas del ecosistema:");
        var report = this.organisms.map(function (org) { return ({
            name: org.name,
            lifespan: org.lifespan,
            population: Math.floor(Math.random() * 100),
        }); });
        console.table(report);
    };
    return EcosystemService;
}());
exports.EcosystemService = EcosystemService;
