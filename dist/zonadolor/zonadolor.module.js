"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonadolorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const zonadolor_service_1 = require("./zonadolor.service");
const zonadolor_controller_1 = require("./zonadolor.controller");
const zonadolor_entity_1 = require("./entities/zonadolor.entity");
let ZonadolorModule = class ZonadolorModule {
};
exports.ZonadolorModule = ZonadolorModule;
exports.ZonadolorModule = ZonadolorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([zonadolor_entity_1.Zonadolor]),
        ],
        controllers: [zonadolor_controller_1.ZonadolorController],
        providers: [zonadolor_service_1.ZonadolorService],
        exports: [zonadolor_service_1.ZonadolorService],
    })
], ZonadolorModule);
//# sourceMappingURL=zonadolor.module.js.map