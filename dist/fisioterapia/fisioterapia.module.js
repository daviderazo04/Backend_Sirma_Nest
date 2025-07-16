"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FisioterapiaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fisioterapia_service_1 = require("./fisioterapia.service");
const fisioterapia_controller_1 = require("./fisioterapia.controller");
const fisioterapia_entity_1 = require("./entities/fisioterapia.entity");
const paciente_module_1 = require("../paciente/paciente.module");
let FisioterapiaModule = class FisioterapiaModule {
};
exports.FisioterapiaModule = FisioterapiaModule;
exports.FisioterapiaModule = FisioterapiaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([fisioterapia_entity_1.Fisioterapia]),
            paciente_module_1.PacienteModule,
        ],
        controllers: [fisioterapia_controller_1.FisioterapiaController],
        providers: [fisioterapia_service_1.FisioterapiaService],
        exports: [fisioterapia_service_1.FisioterapiaService],
    })
], FisioterapiaModule);
//# sourceMappingURL=fisioterapia.module.js.map