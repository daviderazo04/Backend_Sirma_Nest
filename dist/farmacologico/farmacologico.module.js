"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmacologicoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const farmacologico_service_1 = require("./farmacologico.service");
const farmacologico_controller_1 = require("./farmacologico.controller");
const farmacologico_entity_1 = require("./entities/farmacologico.entity");
const medicina_module_1 = require("../medicina/medicina.module");
let FarmacologicoModule = class FarmacologicoModule {
};
exports.FarmacologicoModule = FarmacologicoModule;
exports.FarmacologicoModule = FarmacologicoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([farmacologico_entity_1.Farmacologico]),
            (0, common_1.forwardRef)(() => medicina_module_1.MedicinaModule),
        ],
        controllers: [farmacologico_controller_1.FarmacologicoController],
        providers: [farmacologico_service_1.FarmacologicoService],
        exports: [farmacologico_service_1.FarmacologicoService],
    })
], FarmacologicoModule);
//# sourceMappingURL=farmacologico.module.js.map