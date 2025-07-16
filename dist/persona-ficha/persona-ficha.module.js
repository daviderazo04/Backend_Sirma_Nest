"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaFichaModule = void 0;
const common_1 = require("@nestjs/common");
const persona_ficha_service_1 = require("./persona-ficha.service");
const persona_ficha_controller_1 = require("./persona-ficha.controller");
const persona_ficha_entity_1 = require("./entities/persona-ficha.entity");
const typeorm_1 = require("@nestjs/typeorm");
let PersonaFichaModule = class PersonaFichaModule {
};
exports.PersonaFichaModule = PersonaFichaModule;
exports.PersonaFichaModule = PersonaFichaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([persona_ficha_entity_1.PersonaFicha]),
        ],
        controllers: [persona_ficha_controller_1.PersonaFichaController],
        providers: [persona_ficha_service_1.PersonaFichaService],
    })
], PersonaFichaModule);
//# sourceMappingURL=persona-ficha.module.js.map