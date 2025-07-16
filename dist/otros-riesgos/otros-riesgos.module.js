"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtrosRiesgosModule = void 0;
const common_1 = require("@nestjs/common");
const otros_riesgos_service_1 = require("./otros-riesgos.service");
const otros_riesgos_controller_1 = require("./otros-riesgos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const enfermeria_module_1 = require("../enfermeria/enfermeria.module");
const otros_riesgo_entity_1 = require("./entities/otros-riesgo.entity");
let OtrosRiesgosModule = class OtrosRiesgosModule {
};
exports.OtrosRiesgosModule = OtrosRiesgosModule;
exports.OtrosRiesgosModule = OtrosRiesgosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([otros_riesgo_entity_1.Otrosriesgos]),
            (0, common_1.forwardRef)(() => enfermeria_module_1.EnfermeriaModule),
        ],
        controllers: [otros_riesgos_controller_1.OtrosRiesgosController],
        providers: [otros_riesgos_service_1.OtrosRiesgosService],
        exports: [otros_riesgos_service_1.OtrosRiesgosService],
    })
], OtrosRiesgosModule);
//# sourceMappingURL=otros-riesgos.module.js.map