"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatisfaccionInteligenciaArtificialModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const satisfaccion_inteligencia_artificial_entity_1 = require("./entities/satisfaccion-inteligencia-artificial.entity");
const satisfaccion_inteligencia_artificial_service_1 = require("./satisfaccion-inteligencia-artificial.service");
const satisfaccion_inteligencia_artificial_controller_1 = require("./satisfaccion-inteligencia-artificial.controller");
let SatisfaccionInteligenciaArtificialModule = class SatisfaccionInteligenciaArtificialModule {
};
exports.SatisfaccionInteligenciaArtificialModule = SatisfaccionInteligenciaArtificialModule;
exports.SatisfaccionInteligenciaArtificialModule = SatisfaccionInteligenciaArtificialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([satisfaccion_inteligencia_artificial_entity_1.SatisfaccionInteligenciaArtificial])],
        controllers: [satisfaccion_inteligencia_artificial_controller_1.SatisfaccionInteligenciaArtificialController],
        providers: [satisfaccion_inteligencia_artificial_service_1.SatisfaccionInteligenciaArtificialService],
    })
], SatisfaccionInteligenciaArtificialModule);
//# sourceMappingURL=satisfaccion-inteligencia-artificial.module.js.map