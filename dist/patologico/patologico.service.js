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
exports.PatologicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const patologico_entity_1 = require("./entities/patologico.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let PatologicoService = class PatologicoService {
    patologicoRepository;
    medicinaService;
    constructor(patologicoRepository, medicinaService) {
        this.patologicoRepository = patologicoRepository;
        this.medicinaService = medicinaService;
    }
    async create(createPatologicoDto) {
        if (!createPatologicoDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create a Patologico record.');
        }
        const medicina = await this.medicinaService.findOne(createPatologicoDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createPatologicoDto.idmedicina} not found.`);
        }
        const patologico = this.patologicoRepository.create({
            ...createPatologicoDto,
            idmedicina2: medicina,
        });
        return await this.patologicoRepository.save(patologico);
    }
    async findAll() {
        return await this.patologicoRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const patologico = await this.patologicoRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!patologico) {
            throw new common_1.NotFoundException(`Patologico record with ID ${id} not found.`);
        }
        return patologico;
    }
    async update(id, updatePatologicoDto) {
        const patologico = await this.patologicoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!patologico) {
            throw new common_1.NotFoundException(`Patologico record with ID ${id} not found.`);
        }
        Object.assign(patologico, updatePatologicoDto);
        return await this.patologicoRepository.save(patologico);
    }
    async remove(id) {
        const patologico = await this.patologicoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!patologico) {
            throw new common_1.NotFoundException(`Patologico record with ID ${id} not found.`);
        }
        return await this.patologicoRepository.remove(patologico);
    }
};
exports.PatologicoService = PatologicoService;
exports.PatologicoService = PatologicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patologico_entity_1.Patologico)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], PatologicoService);
//# sourceMappingURL=patologico.service.js.map