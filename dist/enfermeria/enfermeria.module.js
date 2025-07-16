"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnfermeriaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const enfermeria_entity_1 = require("./entities/enfermeria.entity");
const enfermeria_service_1 = require("./enfermeria.service");
const enfermeria_controller_1 = require("./enfermeria.controller");
const paciente_module_1 = require("../paciente/paciente.module");
const act_basicas_module_1 = require("../act-basicas/act-basicas.module");
const act_instrumental_module_1 = require("../act-instrumental/act-instrumental.module");
const cognitivo_module_1 = require("../cognitivo/cognitivo.module");
const depresion_module_1 = require("../depresion/depresion.module");
const otros_riesgos_module_1 = require("../otros-riesgos/otros-riesgos.module");
const recurso_social_module_1 = require("../recurso-social/recurso-social.module");
const tamizaje_module_1 = require("../tamizaje/tamizaje.module");
let EnfermeriaModule = class EnfermeriaModule {
};
exports.EnfermeriaModule = EnfermeriaModule;
exports.EnfermeriaModule = EnfermeriaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([enfermeria_entity_1.Enfermeria]),
            (0, common_1.forwardRef)(() => act_basicas_module_1.ActBasicasModule),
            (0, common_1.forwardRef)(() => act_instrumental_module_1.ActInstrumentalModule),
            (0, common_1.forwardRef)(() => cognitivo_module_1.CognitivoModule),
            (0, common_1.forwardRef)(() => depresion_module_1.DepresionModule),
            (0, common_1.forwardRef)(() => otros_riesgos_module_1.OtrosRiesgosModule),
            (0, common_1.forwardRef)(() => recurso_social_module_1.RecursoSocialModule),
            (0, common_1.forwardRef)(() => tamizaje_module_1.TamizajeModule),
            (0, common_1.forwardRef)(() => paciente_module_1.PacienteModule),
        ],
        controllers: [enfermeria_controller_1.EnfermeriaController],
        providers: [enfermeria_service_1.EnfermeriaService],
        exports: [enfermeria_service_1.EnfermeriaService],
    })
], EnfermeriaModule);
//# sourceMappingURL=enfermeria.module.js.map