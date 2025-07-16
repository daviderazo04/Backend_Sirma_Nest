"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntecedentesnutriModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nutricion_entity_1 = require("../nutricion/entities/nutricion.entity");
const antecedentes_nutri_entity_1 = require("./entities/antecedentes-nutri.entity");
const antecedentes_nutri_controller_1 = require("./antecedentes-nutri.controller");
const antecedentes_nutri_service_1 = require("./antecedentes-nutri.service");
let AntecedentesnutriModule = class AntecedentesnutriModule {
};
exports.AntecedentesnutriModule = AntecedentesnutriModule;
exports.AntecedentesnutriModule = AntecedentesnutriModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([antecedentes_nutri_entity_1.Antecedentesnutri, nutricion_entity_1.Nutricion]),
        ],
        controllers: [antecedentes_nutri_controller_1.AntecedentesnutriController],
        providers: [antecedentes_nutri_service_1.AntecedentesnutriService],
        exports: [antecedentes_nutri_service_1.AntecedentesnutriService],
    })
], AntecedentesnutriModule);
//# sourceMappingURL=antecedentes-nutri.module.js.map