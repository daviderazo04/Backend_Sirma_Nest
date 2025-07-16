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
exports.CribajeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cribaje_entity_1 = require("./entities/cribaje.entity");
const nutricion_entity_1 = require("../nutricion/entities/nutricion.entity");
let CribajeService = class CribajeService {
    cribajeRepository;
    nutricionRepository;
    constructor(cribajeRepository, nutricionRepository) {
        this.cribajeRepository = cribajeRepository;
        this.nutricionRepository = nutricionRepository;
    }
    async create(createCribajeDto) {
        const { idnutricion } = createCribajeDto;
        const nutricionExists = await this.nutricionRepository.findOne({ where: { idnutricion } });
        if (!nutricionExists) {
            throw new common_1.NotFoundException(`Nutricion con ID ${idnutricion} no encontrada.`);
        }
        const existingCribaje = await this.cribajeRepository.findOne({ where: { idnutricion } });
        if (existingCribaje) {
            throw new common_1.ConflictException(`Ya existe un registro de Cribaje para la Nutricion con ID ${idnutricion}.`);
        }
        const newCribaje = this.cribajeRepository.create(createCribajeDto);
        newCribaje.idnutricion2 = nutricionExists;
        try {
            return await this.cribajeRepository.save(newCribaje);
        }
        catch (error) {
            console.error('Error al guardar el cribaje:', error.message);
            throw error;
        }
    }
    findAll() {
        return this.cribajeRepository.find();
    }
    async findOne(id) {
        const cribaje = await this.cribajeRepository.findOne({ where: { idnutricion: id } });
        if (!cribaje) {
            throw new common_1.NotFoundException(`Cribaje con ID de Nutricion ${id} no encontrado.`);
        }
        return cribaje;
    }
    async update(idnutricion, updateCribajeDto) {
        const cribaje = await this.cribajeRepository.findOne({ where: { idnutricion } });
        if (!cribaje) {
            throw new common_1.NotFoundException(`Cribaje con ID de Nutricion ${idnutricion} no encontrado.`);
        }
        if (updateCribajeDto.idnutricion && updateCribajeDto.idnutricion !== idnutricion) {
            throw new common_1.ConflictException('No se permite cambiar el ID de Nutricion de un cribaje existente.');
        }
        this.cribajeRepository.merge(cribaje, updateCribajeDto);
        try {
            return await this.cribajeRepository.save(cribaje);
        }
        catch (error) {
            console.error('Error al actualizar el cribaje:', error.message);
            throw error;
        }
    }
    async remove(idnutricion) {
        const result = await this.cribajeRepository.delete({ idnutricion });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cribaje con ID de Nutricion ${idnutricion} no encontrado.`);
        }
    }
};
exports.CribajeService = CribajeService;
exports.CribajeService = CribajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cribaje_entity_1.Cribaje)),
    __param(1, (0, typeorm_1.InjectRepository)(nutricion_entity_1.Nutricion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CribajeService);
//# sourceMappingURL=cribaje.service.js.map