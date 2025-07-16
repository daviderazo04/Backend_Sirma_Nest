"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguimientoSaludModule = void 0;
const common_1 = require("@nestjs/common");
const seguimiento_salud_service_1 = require("./seguimiento-salud.service");
const seguimiento_salud_controller_1 = require("./seguimiento-salud.controller");
let SeguimientoSaludModule = class SeguimientoSaludModule {
};
exports.SeguimientoSaludModule = SeguimientoSaludModule;
exports.SeguimientoSaludModule = SeguimientoSaludModule = __decorate([
    (0, common_1.Module)({
        controllers: [seguimiento_salud_controller_1.SeguimientoSaludController],
        providers: [seguimiento_salud_service_1.SeguimientoSaludService],
    })
], SeguimientoSaludModule);
//# sourceMappingURL=seguimiento-salud.module.js.map