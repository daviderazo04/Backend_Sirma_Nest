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
exports.EvaluacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evaluacion_entity_1 = require("./entities/evaluacion.entity");
const nutricion_entity_1 = require("../nutricion/entities/nutricion.entity");
let EvaluacionService = class EvaluacionService {
    evaluacionRepository;
    nutricionRepository;
    constructor(evaluacionRepository, nutricionRepository) {
        this.evaluacionRepository = evaluacionRepository;
        this.nutricionRepository = nutricionRepository;
    }
    async create(createEvaluacionDto) {
        const { idnutricion, ...evaluacionData } = createEvaluacionDto;
        const nutricion = await this.nutricionRepository.findOneBy({ idnutricion });
        if (!nutricion) {
            throw new common_1.NotFoundException(`Nutricion con ID ${idnutricion} no encontrada.`);
        }
        const existingEvaluacion = await this.evaluacionRepository.findOneBy({ idnutricion });
        if (existingEvaluacion) {
            throw new common_1.BadRequestException(`Ya existe una evaluación para el ID de Nutrición ${idnutricion}.`);
        }
        const nuevaEvaluacion = this.evaluacionRepository.create({
            idnutricion: idnutricion,
            ...evaluacionData,
            idnutricion2: nutricion,
        });
        return this.evaluacionRepository.save(nuevaEvaluacion);
    }
    async findAll() {
        return this.evaluacionRepository.find({
            relations: ['idnutricion2'],
        });
    }
    async findOne(id) {
        const evaluacion = await this.evaluacionRepository.findOne({
            where: { idnutricion: id },
            relations: ['idnutricion2'],
        });
        if (!evaluacion) {
            throw new common_1.NotFoundException(`Evaluación con ID de Nutrición ${id} no encontrada.`);
        }
        return evaluacion;
    }
    async update(id, updateEvaluacionDto) {
        const evaluacion = await this.evaluacionRepository.findOneBy({ idnutricion: id });
        if (!evaluacion) {
            throw new common_1.NotFoundException(`Evaluación con ID de Nutrición ${id} no encontrada.`);
        }
        const { idnutricion, ...dataToUpdate } = updateEvaluacionDto;
        Object.assign(evaluacion, dataToUpdate);
        return this.evaluacionRepository.save(evaluacion);
    }
    async remove(id) {
        const result = await this.evaluacionRepository.delete(id);
        if (result.affected === 0 || result.affected === null) {
            throw new common_1.NotFoundException(`Evaluación con ID de Nutrición ${id} no encontrada.`);
        }
        return { affected: result.affected ?? undefined };
    }
};
exports.EvaluacionService = EvaluacionService;
exports.EvaluacionService = EvaluacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(evaluacion_entity_1.Evaluacion)),
    __param(1, (0, typeorm_1.InjectRepository)(nutricion_entity_1.Nutricion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EvaluacionService);
//# sourceMappingURL=evaluacion.service.js.map