"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndrologicoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const andrologico_service_1 = require("./andrologico.service");
const andrologico_controller_1 = require("./andrologico.controller");
const andrologico_entity_1 = require("./entities/andrologico.entity");
const medicina_module_1 = require("../medicina/medicina.module");
let AndrologicoModule = class AndrologicoModule {
};
exports.AndrologicoModule = AndrologicoModule;
exports.AndrologicoModule = AndrologicoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([andrologico_entity_1.Andrologico]),
            (0, common_1.forwardRef)(() => medicina_module_1.MedicinaModule),
        ],
        controllers: [andrologico_controller_1.AndrologicoController],
        providers: [andrologico_service_1.AndrologicoService],
        exports: [andrologico_service_1.AndrologicoService],
    })
], AndrologicoModule);
//# sourceMappingURL=andrologico.module.js.map