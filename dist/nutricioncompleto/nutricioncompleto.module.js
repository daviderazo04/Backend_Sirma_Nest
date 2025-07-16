"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutricioncompletoModule = void 0;
const common_1 = require("@nestjs/common");
const nutricioncompleto_service_1 = require("./nutricioncompleto.service");
const nutricioncompleto_controller_1 = require("./nutricioncompleto.controller");
let NutricioncompletoModule = class NutricioncompletoModule {
};
exports.NutricioncompletoModule = NutricioncompletoModule;
exports.NutricioncompletoModule = NutricioncompletoModule = __decorate([
    (0, common_1.Module)({
        controllers: [nutricioncompleto_controller_1.NutricioncompletoController],
        providers: [nutricioncompleto_service_1.NutricioncompletoService],
    })
], NutricioncompletoModule);
//# sourceMappingURL=nutricioncompleto.module.js.map