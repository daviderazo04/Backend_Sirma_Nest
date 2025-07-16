"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamenRegionalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const examen_regional_service_1 = require("./examen-regional.service");
const examen_regional_controller_1 = require("./examen-regional.controller");
const examen_regional_entity_1 = require("./entities/examen-regional.entity");
const medicina_module_1 = require("../medicina/medicina.module");
let ExamenRegionalModule = class ExamenRegionalModule {
};
exports.ExamenRegionalModule = ExamenRegionalModule;
exports.ExamenRegionalModule = ExamenRegionalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([examen_regional_entity_1.Examenregional]),
            (0, common_1.forwardRef)(() => medicina_module_1.MedicinaModule),
        ],
        controllers: [examen_regional_controller_1.ExamenRegionalController],
        providers: [examen_regional_service_1.ExamenRegionalService],
        exports: [examen_regional_service_1.ExamenRegionalService],
    })
], ExamenRegionalModule);
//# sourceMappingURL=examen-regional.module.js.map