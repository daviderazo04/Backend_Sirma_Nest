"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const habitos_service_1 = require("./habitos.service");
const habitos_controller_1 = require("./habitos.controller");
const habito_entity_1 = require("./entities/habito.entity");
const medicina_module_1 = require("../medicina/medicina.module");
let HabitosModule = class HabitosModule {
};
exports.HabitosModule = HabitosModule;
exports.HabitosModule = HabitosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([habito_entity_1.Habitos]),
            (0, common_1.forwardRef)(() => medicina_module_1.MedicinaModule),
        ],
        controllers: [habitos_controller_1.HabitosController],
        providers: [habitos_service_1.HabitoService],
        exports: [habitos_service_1.HabitoService],
    })
], HabitosModule);
//# sourceMappingURL=habitos.module.js.map