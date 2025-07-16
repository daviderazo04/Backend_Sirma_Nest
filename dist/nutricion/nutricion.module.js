"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutricionModule = void 0;
const common_1 = require("@nestjs/common");
const nutricion_service_1 = require("./nutricion.service");
const nutricion_controller_1 = require("./nutricion.controller");
const nutricion_entity_1 = require("./entities/nutricion.entity");
const typeorm_1 = require("@nestjs/typeorm");
let NutricionModule = class NutricionModule {
};
exports.NutricionModule = NutricionModule;
exports.NutricionModule = NutricionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nutricion_entity_1.Nutricion])],
        controllers: [nutricion_controller_1.NutricionController],
        providers: [nutricion_service_1.NutricionService],
    })
], NutricionModule);
//# sourceMappingURL=nutricion.module.js.map