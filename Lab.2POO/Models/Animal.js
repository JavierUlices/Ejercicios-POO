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
exports.Animal = void 0;
var ModelosOrganismo_1 = require("./ModelosOrganismo");
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animal.prototype.interactWithEnvironment = function () {
        console.log("".concat(this.name, " est\u00E1 cazando."));
    };
    return Animal;
}(ModelosOrganismo_1.Organism));
exports.Animal = Animal;
