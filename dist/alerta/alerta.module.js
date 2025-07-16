"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alerta_service_1 = require("./alerta.service");
const alerta_controller_1 = require("./alerta.controller");
const alerta_entity_1 = require("./entities/alerta.entity");
const medicina_module_1 = require("../medicina/medicina.module");
let AlertaModule = class AlertaModule {
};
exports.AlertaModule = AlertaModule;
exports.AlertaModule = AlertaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([alerta_entity_1.Alerta]),
            (0, common_1.forwardRef)(() => medicina_module_1.MedicinaModule),
        ],
        controllers: [alerta_controller_1.AlertaController],
        providers: [alerta_service_1.AlertaService],
        exports: [alerta_service_1.AlertaService],
    })
], AlertaModule);
//# sourceMappingURL=alerta.module.js.map