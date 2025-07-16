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
exports.ExamenRegionalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const examen_regional_entity_1 = require("./entities/examen-regional.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let ExamenRegionalService = class ExamenRegionalService {
    examenRegionalRepository;
    medicinaService;
    constructor(examenRegionalRepository, medicinaService) {
        this.examenRegionalRepository = examenRegionalRepository;
        this.medicinaService = medicinaService;
    }
    async create(createExamenRegionalDto) {
        if (!createExamenRegionalDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create an Examen Regional record.');
        }
        const medicina = await this.medicinaService.findOne(createExamenRegionalDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createExamenRegionalDto.idmedicina} not found.`);
        }
        const examenRegional = this.examenRegionalRepository.create({
            ...createExamenRegionalDto,
            idmedicina2: medicina,
        });
        return await this.examenRegionalRepository.save(examenRegional);
    }
    async findAll() {
        return await this.examenRegionalRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const examenRegional = await this.examenRegionalRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!examenRegional) {
            throw new common_1.NotFoundException(`Examen Regional record with ID ${id} not found.`);
        }
        return examenRegional;
    }
    async update(id, updateExamenRegionalDto) {
        const examenRegional = await this.examenRegionalRepository.findOne({
            where: { idmedicina: id },
        });
        if (!examenRegional) {
            throw new common_1.NotFoundException(`Examen Regional record with ID ${id} not found.`);
        }
        Object.assign(examenRegional, updateExamenRegionalDto);
        return await this.examenRegionalRepository.save(examenRegional);
    }
    async remove(id) {
        const examenRegional = await this.examenRegionalRepository.findOne({
            where: { idmedicina: id },
        });
        if (!examenRegional) {
            throw new common_1.NotFoundException(`Examen Regional record with ID ${id} not found.`);
        }
        return await this.examenRegionalRepository.remove(examenRegional);
    }
};
exports.ExamenRegionalService = ExamenRegionalService;
exports.ExamenRegionalService = ExamenRegionalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(examen_regional_entity_1.Examenregional)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], ExamenRegionalService);
//# sourceMappingURL=examen-regional.service.js.map