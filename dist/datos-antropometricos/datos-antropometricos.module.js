"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosantropometricosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nutricion_entity_1 = require("../nutricion/entities/nutricion.entity");
const datos_antropometrico_entity_1 = require("./entities/datos-antropometrico.entity");
const datos_antropometricos_controller_1 = require("./datos-antropometricos.controller");
const datos_antropometricos_service_1 = require("./datos-antropometricos.service");
let DatosantropometricosModule = class DatosantropometricosModule {
};
exports.DatosantropometricosModule = DatosantropometricosModule;
exports.DatosantropometricosModule = DatosantropometricosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([datos_antropometrico_entity_1.Datosantropometricos, nutricion_entity_1.Nutricion]),
        ],
        controllers: [datos_antropometricos_controller_1.DatosantropometricosController],
        providers: [datos_antropometricos_service_1.DatosantropometricosService],
        exports: [datos_antropometricos_service_1.DatosantropometricosService],
    })
], DatosantropometricosModule);
//# sourceMappingURL=datos-antropometricos.module.js.map