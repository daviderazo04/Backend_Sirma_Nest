"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DolorFisioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dolor_fisio_service_1 = require("./dolor-fisio.service");
const dolor_fisio_controller_1 = require("./dolor-fisio.controller");
const dolor_fisio_entity_1 = require("./entities/dolor-fisio.entity");
const fisioterapia_module_1 = require("../fisioterapia/fisioterapia.module");
const zonadolor_module_1 = require("../zonadolor/zonadolor.module");
let DolorFisioModule = class DolorFisioModule {
};
exports.DolorFisioModule = DolorFisioModule;
exports.DolorFisioModule = DolorFisioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([dolor_fisio_entity_1.Dolorfisio]),
            (0, common_1.forwardRef)(() => fisioterapia_module_1.FisioterapiaModule),
            zonadolor_module_1.ZonadolorModule,
        ],
        controllers: [dolor_fisio_controller_1.DolorFisioController],
        providers: [dolor_fisio_service_1.DolorFisioService],
        exports: [dolor_fisio_service_1.DolorFisioService],
    })
], DolorFisioModule);
//# sourceMappingURL=dolor-fisio.module.js.map