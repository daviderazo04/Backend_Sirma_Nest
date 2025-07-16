"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TamizajeModule = void 0;
const common_1 = require("@nestjs/common");
const tamizaje_service_1 = require("./tamizaje.service");
const tamizaje_controller_1 = require("./tamizaje.controller");
const tamizaje_entity_1 = require("./entities/tamizaje.entity");
const typeorm_1 = require("@nestjs/typeorm");
const enfermeria_module_1 = require("../enfermeria/enfermeria.module");
let TamizajeModule = class TamizajeModule {
};
exports.TamizajeModule = TamizajeModule;
exports.TamizajeModule = TamizajeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tamizaje_entity_1.Tamizaje]),
            (0, common_1.forwardRef)(() => enfermeria_module_1.EnfermeriaModule),
        ],
        controllers: [tamizaje_controller_1.TamizajeController],
        providers: [tamizaje_service_1.TamizajeService],
        exports: [tamizaje_service_1.TamizajeService],
    })
], TamizajeModule);
//# sourceMappingURL=tamizaje.module.js.map