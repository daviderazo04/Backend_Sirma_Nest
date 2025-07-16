"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const diagnostico_service_1 = require("./diagnostico.service");
const diagnostico_controller_1 = require("./diagnostico.controller");
const diagnostico_entity_1 = require("./entities/diagnostico.entity");
const medicina_module_1 = require("../medicina/medicina.module");
let DiagnosticoModule = class DiagnosticoModule {
};
exports.DiagnosticoModule = DiagnosticoModule;
exports.DiagnosticoModule = DiagnosticoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([diagnostico_entity_1.Diagnostico]),
            (0, common_1.forwardRef)(() => medicina_module_1.MedicinaModule),
        ],
        controllers: [diagnostico_controller_1.DiagnosticoController],
        providers: [diagnostico_service_1.DiagnosticoService],
        exports: [diagnostico_service_1.DiagnosticoService],
    })
], DiagnosticoModule);
//# sourceMappingURL=diagnostico.module.js.map