"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActBasicasModule = void 0;
const common_1 = require("@nestjs/common");
const act_basicas_service_1 = require("./act-basicas.service");
const act_basicas_controller_1 = require("./act-basicas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const act_basica_entity_1 = require("./entities/act-basica.entity");
const enfermeria_module_1 = require("../enfermeria/enfermeria.module");
const enfermeria_entity_1 = require("../enfermeria/entities/enfermeria.entity");
let ActBasicasModule = class ActBasicasModule {
};
exports.ActBasicasModule = ActBasicasModule;
exports.ActBasicasModule = ActBasicasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([act_basica_entity_1.Actbasicas, enfermeria_entity_1.Enfermeria]),
            (0, common_1.forwardRef)(() => enfermeria_module_1.EnfermeriaModule),
        ],
        controllers: [act_basicas_controller_1.ActBasicasController],
        providers: [act_basicas_service_1.ActBasicasService],
        exports: [act_basicas_service_1.ActBasicasService],
    })
], ActBasicasModule);
//# sourceMappingURL=act-basicas.module.js.map