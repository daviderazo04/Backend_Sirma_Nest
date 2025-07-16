"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CribajeModule = void 0;
const common_1 = require("@nestjs/common");
const cribaje_service_1 = require("./cribaje.service");
const cribaje_controller_1 = require("./cribaje.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cribaje_entity_1 = require("./entities/cribaje.entity");
const nutricion_entity_1 = require("../nutricion/entities/nutricion.entity");
let CribajeModule = class CribajeModule {
};
exports.CribajeModule = CribajeModule;
exports.CribajeModule = CribajeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cribaje_entity_1.Cribaje, nutricion_entity_1.Nutricion])],
        controllers: [cribaje_controller_1.CribajeController],
        providers: [cribaje_service_1.CribajeService],
    })
], CribajeModule);
//# sourceMappingURL=cribaje.module.js.map