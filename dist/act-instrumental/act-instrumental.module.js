"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActInstrumentalModule = void 0;
const common_1 = require("@nestjs/common");
const act_instrumental_service_1 = require("./act-instrumental.service");
const act_instrumental_controller_1 = require("./act-instrumental.controller");
const typeorm_1 = require("@nestjs/typeorm");
const act_instrumental_entity_1 = require("./entities/act-instrumental.entity");
const enfermeria_module_1 = require("../enfermeria/enfermeria.module");
let ActInstrumentalModule = class ActInstrumentalModule {
};
exports.ActInstrumentalModule = ActInstrumentalModule;
exports.ActInstrumentalModule = ActInstrumentalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([act_instrumental_entity_1.Actinstrumental]),
            (0, common_1.forwardRef)(() => enfermeria_module_1.EnfermeriaModule),
        ],
        controllers: [act_instrumental_controller_1.ActInstrumentalController],
        providers: [act_instrumental_service_1.ActInstrumentalService],
        exports: [act_instrumental_service_1.ActInstrumentalService],
    })
], ActInstrumentalModule);
//# sourceMappingURL=act-instrumental.module.js.map