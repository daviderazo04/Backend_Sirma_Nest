"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquilibrioDinamicoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const equilibrio_dinamico_service_1 = require("./equilibrio-dinamico.service");
const equilibrio_dinamico_controller_1 = require("./equilibrio-dinamico.controller");
const equilibrio_dinamico_entity_1 = require("./entities/equilibrio-dinamico.entity");
const fisioterapia_module_1 = require("../fisioterapia/fisioterapia.module");
let EquilibrioDinamicoModule = class EquilibrioDinamicoModule {
};
exports.EquilibrioDinamicoModule = EquilibrioDinamicoModule;
exports.EquilibrioDinamicoModule = EquilibrioDinamicoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([equilibrio_dinamico_entity_1.Equilibriodinamico]),
            (0, common_1.forwardRef)(() => fisioterapia_module_1.FisioterapiaModule),
        ],
        controllers: [equilibrio_dinamico_controller_1.EquilibrioDinamicoController],
        providers: [equilibrio_dinamico_service_1.EquilibrioDinamicoService],
        exports: [equilibrio_dinamico_service_1.EquilibrioDinamicoService],
    })
], EquilibrioDinamicoModule);
//# sourceMappingURL=equilibrio-dinamico.module.js.map