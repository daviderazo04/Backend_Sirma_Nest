"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquilibrioEstaticoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const equilibrio_estatico_service_1 = require("./equilibrio-estatico.service");
const equilibrio_estatico_controller_1 = require("./equilibrio-estatico.controller");
const equilibrio_estatico_entity_1 = require("./entities/equilibrio-estatico.entity");
const fisioterapia_module_1 = require("../fisioterapia/fisioterapia.module");
let EquilibrioEstaticoModule = class EquilibrioEstaticoModule {
};
exports.EquilibrioEstaticoModule = EquilibrioEstaticoModule;
exports.EquilibrioEstaticoModule = EquilibrioEstaticoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([equilibrio_estatico_entity_1.Equilibrioestatico]),
            (0, common_1.forwardRef)(() => fisioterapia_module_1.FisioterapiaModule),
        ],
        controllers: [equilibrio_estatico_controller_1.EquilibrioEstaticoController],
        providers: [equilibrio_estatico_service_1.EquilibrioEstaticoService],
        exports: [equilibrio_estatico_service_1.EquilibrioEstaticoService],
    })
], EquilibrioEstaticoModule);
//# sourceMappingURL=equilibrio-estatico.module.js.map