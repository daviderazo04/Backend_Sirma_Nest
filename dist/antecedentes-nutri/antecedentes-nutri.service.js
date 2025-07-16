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
exports.AntecedentesnutriService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nutricion_entity_1 = require("../nutricion/entities/nutricion.entity");
const antecedentes_nutri_entity_1 = require("./entities/antecedentes-nutri.entity");
let AntecedentesnutriService = class AntecedentesnutriService {
    antecedentesnutriRepository;
    nutricionRepository;
    constructor(antecedentesnutriRepository, nutricionRepository) {
        this.antecedentesnutriRepository = antecedentesnutriRepository;
        this.nutricionRepository = nutricionRepository;
    }
    async create(createAntecedentesnutriDto) {
        const { idnutricion, ...antecedentesData } = createAntecedentesnutriDto;
        const nutricion = await this.nutricionRepository.findOneBy({ idnutricion });
        if (!nutricion) {
            throw new common_1.NotFoundException(`Nutricion con ID ${idnutricion} no encontrada.`);
        }
        const existingAntecedente = await this.antecedentesnutriRepository.findOneBy({ idnutricion });
        if (existingAntecedente) {
            throw new common_1.BadRequestException(`Ya existe un antecedente nutricional para el ID de Nutrición ${idnutricion}.`);
        }
        const nuevoAntecedente = this.antecedentesnutriRepository.create({
            idnutricion: idnutricion,
            ...antecedentesData,
            idnutricion2: nutricion,
        });
        return this.antecedentesnutriRepository.save(nuevoAntecedente);
    }
    async findAll() {
        return this.antecedentesnutriRepository.find({
            relations: ['idnutricion2'],
        });
    }
    async findOne(id) {
        const antecedente = await this.antecedentesnutriRepository.findOne({
            where: { idnutricion: id },
            relations: ['idnutricion2'],
        });
        if (!antecedente) {
            throw new common_1.NotFoundException(`Antecedente nutricional con ID de Nutrición ${id} no encontrado.`);
        }
        return antecedente;
    }
    async update(id, updateAntecedentesnutriDto) {
        const antecedente = await this.antecedentesnutriRepository.findOneBy({ idnutricion: id });
        if (!antecedente) {
            throw new common_1.NotFoundException(`Antecedente nutricional con ID de Nutrición ${id} no encontrado.`);
        }
        const { idnutricion, ...dataToUpdate } = updateAntecedentesnutriDto;
        Object.assign(antecedente, dataToUpdate);
        return this.antecedentesnutriRepository.save(antecedente);
    }
    async remove(id) {
        const result = await this.antecedentesnutriRepository.delete(id);
        if (result.affected === 0 || result.affected === null) {
            throw new common_1.NotFoundException(`Antecedente nutricional con ID de Nutrición ${id} no encontrado.`);
        }
        return { affected: result.affected ?? undefined };
    }
};
exports.AntecedentesnutriService = AntecedentesnutriService;
exports.AntecedentesnutriService = AntecedentesnutriService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(antecedentes_nutri_entity_1.Antecedentesnutri)),
    __param(1, (0, typeorm_1.InjectRepository)(nutricion_entity_1.Nutricion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AntecedentesnutriService);
//# sourceMappingURL=antecedentes-nutri.service.js.map