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
exports.DatosantropometricosController = void 0;
const common_1 = require("@nestjs/common");
const datos_antropometricos_service_1 = require("./datos-antropometricos.service");
const create_datos_antropometrico_dto_1 = require("./dto/create-datos-antropometrico.dto");
let DatosantropometricosController = class DatosantropometricosController {
    datosantropometricosService;
    constructor(datosantropometricosService) {
        this.datosantropometricosService = datosantropometricosService;
    }
    async create(createDatosantropometricosDto) {
        return this.datosantropometricosService.create(createDatosantropometricosDto);
    }
    async findAll() {
        return this.datosantropometricosService.findAll();
    }
    async findOne(id) {
        return this.datosantropometricosService.findOne(id);
    }
    async update(id, updateDatosantropometricosDto) {
        return this.datosantropometricosService.update(id, updateDatosantropometricosDto);
    }
    async remove(id) {
        await this.datosantropometricosService.remove(id);
    }
};
exports.DatosantropometricosController = DatosantropometricosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_datos_antropometrico_dto_1.CreateDatosantropometricosDto]),
    __metadata("design:returntype", Promise)
], DatosantropometricosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatosantropometricosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DatosantropometricosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_datos_antropometrico_dto_1.CreateDatosantropometricosDto]),
    __metadata("design:returntype", Promise)
], DatosantropometricosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DatosantropometricosController.prototype, "remove", null);
exports.DatosantropometricosController = DatosantropometricosController = __decorate([
    (0, common_1.Controller)('datosantropometricos'),
    __metadata("design:paramtypes", [datos_antropometricos_service_1.DatosantropometricosService])
], DatosantropometricosController);
//# sourceMappingURL=datos-antropometricos.controller.js.map