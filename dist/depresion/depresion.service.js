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
exports.DepresionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const depresion_entity_1 = require("./entities/depresion.entity");
const enfermeria_service_1 = require("../enfermeria/enfermeria.service");
let DepresionService = class DepresionService {
    depresionRepository;
    enfermeriaService;
    constructor(depresionRepository, enfermeriaService) {
        this.depresionRepository = depresionRepository;
        this.enfermeriaService = enfermeriaService;
    }
    async create(createDepresionDto) {
        if (!createDepresionDto.idenfermeria) {
            throw new common_1.NotFoundException('idEnfermeria es requerido para crear un registro de Depresión.');
        }
        const enfermeria = await this.enfermeriaService.findOne(createDepresionDto.idenfermeria);
        if (!enfermeria) {
            throw new common_1.NotFoundException(`Enfermería con ID ${createDepresionDto.idenfermeria} no encontrada.`);
        }
        const depresion = this.depresionRepository.create({
            ...createDepresionDto,
            idenfermeria2: enfermeria,
        });
        return await this.depresionRepository.save(depresion);
    }
    async findAll() {
        return await this.depresionRepository.find({
            relations: ['idenfermeria2'],
        });
    }
    async findOne(id) {
        const depresion = await this.depresionRepository.findOne({
            where: { idenfermeria: id },
            relations: ['idenfermeria2'],
        });
        if (!depresion) {
            throw new common_1.NotFoundException(`Registro de Depresión con ID ${id} no encontrado.`);
        }
        return depresion;
    }
    async update(id, updateDepresionDto) {
        const depresion = await this.depresionRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!depresion) {
            throw new common_1.NotFoundException(`Registro de Depresión con ID ${id} no encontrado.`);
        }
        Object.assign(depresion, updateDepresionDto);
        return await this.depresionRepository.save(depresion);
    }
    async remove(id) {
        const depresion = await this.depresionRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!depresion) {
            throw new common_1.NotFoundException(`Registro de Depresión con ID ${id} no encontrado.`);
        }
        return await this.depresionRepository.remove(depresion);
    }
};
exports.DepresionService = DepresionService;
exports.DepresionService = DepresionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(depresion_entity_1.Depresion)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => enfermeria_service_1.EnfermeriaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enfermeria_service_1.EnfermeriaService])
], DepresionService);
//# sourceMappingURL=depresion.service.js.map