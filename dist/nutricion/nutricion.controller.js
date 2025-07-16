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
exports.NutricionController = void 0;
const common_1 = require("@nestjs/common");
const nutricion_service_1 = require("./nutricion.service");
const create_nutricion_dto_1 = require("./dto/create-nutricion.dto");
const update_nutricion_dto_1 = require("./dto/update-nutricion.dto");
const swagger_1 = require("@nestjs/swagger");
const nutricion_entity_1 = require("./entities/nutricion.entity");
let NutricionController = class NutricionController {
    nutricionService;
    constructor(nutricionService) {
        this.nutricionService = nutricionService;
    }
    async create(createNutricionDto) {
        return this.nutricionService.create(createNutricionDto);
    }
    async findAll() {
        return this.nutricionService.findAll();
    }
    async findOne(id) {
        return this.nutricionService.findOne(+id);
    }
    async getNutricionCompleta(idNutricion) {
        return await this.nutricionService.obtenerNutricionCompleta(+idNutricion);
    }
    async update(id, updateNutricionDto) {
        return this.nutricionService.update(+id, updateNutricionDto);
    }
    async remove(id) {
        await this.nutricionService.remove(+id);
    }
};
exports.NutricionController = NutricionController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo registro de nutrición' }),
    (0, swagger_1.ApiBody)({ type: create_nutricion_dto_1.CreateNutricionDto, description: 'Datos para crear el registro de nutrición' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'El registro de nutrición ha sido creado exitosamente.',
        type: nutricion_entity_1.Nutricion,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Datos de entrada inválidos.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nutricion_dto_1.CreateNutricionDto]),
    __metadata("design:returntype", Promise)
], NutricionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los registros de nutrición' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Lista de todos los registros de nutrición.',
        type: [nutricion_entity_1.Nutricion],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NutricionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un registro de nutrición por ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'ID del registro de nutrición',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'El registro de nutrición encontrado por ID.',
        type: nutricion_entity_1.Nutricion,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Registro de nutrición no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NutricionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('completa/:idNutricion'),
    __param(0, (0, common_1.Param)('idNutricion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NutricionController.prototype, "getNutricionCompleta", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un registro de nutrición existente' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'ID del registro de nutrición a actualizar',
    }),
    (0, swagger_1.ApiBody)({
        type: update_nutricion_dto_1.UpdateNutricionDto,
        description: 'Datos para actualizar el registro de nutrición (parciales)',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'El registro de nutrición ha sido actualizado exitosamente.',
        type: nutricion_entity_1.Nutricion,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Registro de nutrición no encontrado.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Datos de entrada inválidos.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_nutricion_dto_1.UpdateNutricionDto]),
    __metadata("design:returntype", Promise)
], NutricionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un registro de nutrición' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        description: 'ID del registro de nutrición a eliminar',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'El registro de nutrición ha sido eliminado exitosamente.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Registro de nutrición no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NutricionController.prototype, "remove", null);
exports.NutricionController = NutricionController = __decorate([
    (0, swagger_1.ApiTags)('nutricion'),
    (0, common_1.Controller)('nutricion'),
    __metadata("design:paramtypes", [nutricion_service_1.NutricionService])
], NutricionController);
//# sourceMappingURL=nutricion.controller.js.map