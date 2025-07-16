"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TonoMuscularModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tono_muscular_service_1 = require("./tono-muscular.service");
const tono_muscular_controller_1 = require("./tono-muscular.controller");
const tono_muscular_entity_1 = require("./entities/tono-muscular.entity");
const fisioterapia_module_1 = require("../fisioterapia/fisioterapia.module");
let TonoMuscularModule = class TonoMuscularModule {
};
exports.TonoMuscularModule = TonoMuscularModule;
exports.TonoMuscularModule = TonoMuscularModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tono_muscular_entity_1.Tonomuscular]),
            (0, common_1.forwardRef)(() => fisioterapia_module_1.FisioterapiaModule),
        ],
        controllers: [tono_muscular_controller_1.TonoMuscularController],
        providers: [tono_muscular_service_1.TonoMuscularService],
        exports: [tono_muscular_service_1.TonoMuscularService],
    })
], TonoMuscularModule);
//# sourceMappingURL=tono-muscular.module.js.map