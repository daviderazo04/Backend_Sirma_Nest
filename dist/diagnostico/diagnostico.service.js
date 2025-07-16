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
exports.DiagnosticoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const diagnostico_entity_1 = require("./entities/diagnostico.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let DiagnosticoService = class DiagnosticoService {
    diagnosticoRepository;
    medicinaService;
    constructor(diagnosticoRepository, medicinaService) {
        this.diagnosticoRepository = diagnosticoRepository;
        this.medicinaService = medicinaService;
    }
    async create(createDiagnosticoDto) {
        if (!createDiagnosticoDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create a Diagnostico record.');
        }
        const medicina = await this.medicinaService.findOne(createDiagnosticoDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createDiagnosticoDto.idmedicina} not found.`);
        }
        const diagnostico = this.diagnosticoRepository.create({
            ...createDiagnosticoDto,
            idmedicina2: medicina,
        });
        return await this.diagnosticoRepository.save(diagnostico);
    }
    async findAll() {
        return await this.diagnosticoRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const diagnostico = await this.diagnosticoRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!diagnostico) {
            throw new common_1.NotFoundException(`Diagnostico record with ID ${id} not found.`);
        }
        return diagnostico;
    }
    async update(id, updateDiagnosticoDto) {
        const diagnostico = await this.diagnosticoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!diagnostico) {
            throw new common_1.NotFoundException(`Diagnostico record with ID ${id} not found.`);
        }
        Object.assign(diagnostico, updateDiagnosticoDto);
        return await this.diagnosticoRepository.save(diagnostico);
    }
    async remove(id) {
        const diagnostico = await this.diagnosticoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!diagnostico) {
            throw new common_1.NotFoundException(`Diagnostico record with ID ${id} not found.`);
        }
        return await this.diagnosticoRepository.remove(diagnostico);
    }
};
exports.DiagnosticoService = DiagnosticoService;
exports.DiagnosticoService = DiagnosticoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(diagnostico_entity_1.Diagnostico)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], DiagnosticoService);
//# sourceMappingURL=diagnostico.service.js.map