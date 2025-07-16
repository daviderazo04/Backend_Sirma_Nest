"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepresionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const depresion_service_1 = require("./depresion.service");
const depresion_controller_1 = require("./depresion.controller");
const depresion_entity_1 = require("./entities/depresion.entity");
const enfermeria_module_1 = require("../enfermeria/enfermeria.module");
let DepresionModule = class DepresionModule {
};
exports.DepresionModule = DepresionModule;
exports.DepresionModule = DepresionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([depresion_entity_1.Depresion]),
            (0, common_1.forwardRef)(() => enfermeria_module_1.EnfermeriaModule),
        ],
        controllers: [depresion_controller_1.DepresionController],
        providers: [depresion_service_1.DepresionService],
        exports: [depresion_service_1.DepresionService],
    })
], DepresionModule);
//# sourceMappingURL=depresion.module.js.map