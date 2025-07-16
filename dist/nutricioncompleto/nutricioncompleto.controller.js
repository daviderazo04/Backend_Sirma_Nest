"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutricioncompletoController = void 0;
const common_1 = require("@nestjs/common");
const nutricioncompleto_service_1 = require("./nutricioncompleto.service");
const create_nutricioncompleto_dto_1 = require("./dto/create-nutricioncompleto.dto");
let NutricioncompletoController = class NutricioncompletoController {
    service;
    constructor(service) {
        this.service = service;
    }
    async crear(dto) {
        return await this.service.crear(dto);
    }
    async obtenerPorIdFicha(idFicha) {
        return await this.service.obtenerPorIdFicha(idFicha);
    }
    async obtenerPorIdNutricion(idNutricion) {
        return await this.service.obtenerPorIdNutricion(idNutricion);
    }
    async actualizar(idNutricion, dto) {
        return await this.service.actualizar(idNutricion, dto);
    }
};
exports.NutricioncompletoController = NutricioncompletoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nutricioncompleto_dto_1.CreateNutricionCompletoDto]),
    __metadata("design:returntype", Promise)
], NutricioncompletoController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(':idFicha'),
    __param(0, (0, common_1.Param)('idFicha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NutricioncompletoController.prototype, "obtenerPorIdFicha", null);
__decorate([
    (0, common_1.Get)('header/:idNutricion'),
    __param(0, (0, common_1.Param)('idNutricion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NutricioncompletoController.prototype, "obtenerPorIdNutricion", null);
__decorate([
    (0, common_1.Put)(':idNutricion'),
    __param(0, (0, common_1.Param)('idNutricion')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_nutricioncompleto_dto_1.CreateNutricionCompletoDto]),
    __metadata("design:returntype", Promise)
], NutricioncompletoController.prototype, "actualizar", null);
exports.NutricioncompletoController = NutricioncompletoController = __decorate([
    (0, common_1.Controller)('nutricioncompleto'),
    __metadata("design:paramtypes", [nutricioncompleto_service_1.NutricioncompletoService])
], NutricioncompletoController);
//# sourceMappingURL=nutricioncompleto.controller.js.map