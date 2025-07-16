"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SindromesGeriatricosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sindromes_geriatricos_service_1 = require("./sindromes-geriatricos.service");
const sindromes_geriatricos_controller_1 = require("./sindromes-geriatricos.controller");
const sindromes_geriatrico_entity_1 = require("./entities/sindromes-geriatrico.entity");
const medicina_module_1 = require("../medicina/medicina.module");
let SindromesGeriatricosModule = class SindromesGeriatricosModule {
};
exports.SindromesGeriatricosModule = SindromesGeriatricosModule;
exports.SindromesGeriatricosModule = SindromesGeriatricosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([sindromes_geriatrico_entity_1.Sindromesgeriatricos]),
            (0, common_1.forwardRef)(() => medicina_module_1.MedicinaModule),
        ],
        controllers: [sindromes_geriatricos_controller_1.SindromesGeriatricosController],
        providers: [sindromes_geriatricos_service_1.SindromesGeriatricosService],
        exports: [sindromes_geriatricos_service_1.SindromesGeriatricosService],
    })
], SindromesGeriatricosModule);
//# sourceMappingURL=sindromes-geriatricos.module.js.map