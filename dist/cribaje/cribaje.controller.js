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
exports.CribajeController = void 0;
const common_1 = require("@nestjs/common");
const cribaje_service_1 = require("./cribaje.service");
const create_cribaje_dto_1 = require("./dto/create-cribaje.dto");
const cribaje_entity_1 = require("./entities/cribaje.entity");
const swagger_1 = require("@nestjs/swagger");
const update_cribaje_dto_1 = require("./dto/update-cribaje.dto");
let CribajeController = class CribajeController {
    cribajeService;
    constructor(cribajeService) {
        this.cribajeService = cribajeService;
    }
    async create(createCribajeDto) {
        return this.cribajeService.create(createCribajeDto);
    }
    async findAll() {
        return this.cribajeService.findAll();
    }
    async findOne(idnutricion) {
        return this.cribajeService.findOne(idnutricion);
    }
    async update(idnutricion, updateCribajeDto) {
        return this.cribajeService.update(idnutricion, updateCribajeDto);
    }
    async remove(idnutricion) {
        await this.cribajeService.remove(idnutricion);
    }
};
exports.CribajeController = CribajeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crea un nuevo registro de cribaje' }),
    (0, swagger_1.ApiBody)({ type: create_cribaje_dto_1.CreateCribajeDto, description: 'Datos para crear un nuevo cribaje' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'El cribaje ha sido creado exitosamente.',
        type: cribaje_entity_1.Cribaje,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'La Nutricion asociada no fue encontrada.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: 'Ya existe un registro de Cribaje para la Nutricion especificada.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Datos de entrada inválidos.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cribaje_dto_1.CreateCribajeDto]),
    __metadata("design:returntype", Promise)
], CribajeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene todos los registros de cribaje' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Lista de todos los registros de cribaje.',
        type: [cribaje_entity_1.Cribaje],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CribajeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':idnutricion'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene un registro de cribaje por su ID de nutrición' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Registro de cribaje encontrado.',
        type: cribaje_entity_1.Cribaje,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Cribaje no encontrado.',
    }),
    __param(0, (0, common_1.Param)('idnutricion', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CribajeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':idnutricion'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualiza un registro de cribaje existente' }),
    (0, swagger_1.ApiBody)({ type: update_cribaje_dto_1.UpdateCribajeDto, description: 'Datos para actualizar el cribaje' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'El cribaje ha sido actualizado exitosamente.',
        type: cribaje_entity_1.Cribaje,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Cribaje no encontrado.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CONFLICT,
        description: 'No se permite cambiar el ID de Nutricion de un cribaje existente.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Datos de entrada inválidos.',
    }),
    __param(0, (0, common_1.Param)('idnutricion', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cribaje_dto_1.UpdateCribajeDto]),
    __metadata("design:returntype", Promise)
], CribajeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':idnutricion'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina un registro de cribaje' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'El cribaje ha sido eliminado exitosamente.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Cribaje no encontrado.',
    }),
    __param(0, (0, common_1.Param)('idnutricion', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CribajeController.prototype, "remove", null);
exports.CribajeController = CribajeController = __decorate([
    (0, swagger_1.ApiTags)('Cribaje'),
    (0, common_1.Controller)('cribaje'),
    __metadata("design:paramtypes", [cribaje_service_1.CribajeService])
], CribajeController);
//# sourceMappingURL=cribaje.controller.js.map