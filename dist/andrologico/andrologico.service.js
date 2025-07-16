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
exports.AndrologicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const andrologico_entity_1 = require("./entities/andrologico.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let AndrologicoService = class AndrologicoService {
    andrologicoRepository;
    medicinaService;
    constructor(andrologicoRepository, medicinaService) {
        this.andrologicoRepository = andrologicoRepository;
        this.medicinaService = medicinaService;
    }
    async create(createAndrologicoDto) {
        if (!createAndrologicoDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create an Andrologico record.');
        }
        const medicina = await this.medicinaService.findOne(createAndrologicoDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createAndrologicoDto.idmedicina} not found.`);
        }
        const andrologico = this.andrologicoRepository.create({
            ...createAndrologicoDto,
            idmedicina2: medicina,
        });
        return await this.andrologicoRepository.save(andrologico);
    }
    async findAll() {
        return await this.andrologicoRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const andrologico = await this.andrologicoRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!andrologico) {
            throw new common_1.NotFoundException(`Andrologico record with ID ${id} not found.`);
        }
        return andrologico;
    }
    async update(id, updateAndrologicoDto) {
        const andrologico = await this.andrologicoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!andrologico) {
            throw new common_1.NotFoundException(`Andrologico record with ID ${id} not found.`);
        }
        Object.assign(andrologico, updateAndrologicoDto);
        return await this.andrologicoRepository.save(andrologico);
    }
    async remove(id) {
        const andrologico = await this.andrologicoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!andrologico) {
            throw new common_1.NotFoundException(`Andrologico record with ID ${id} not found.`);
        }
        return await this.andrologicoRepository.remove(andrologico);
    }
};
exports.AndrologicoService = AndrologicoService;
exports.AndrologicoService = AndrologicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(andrologico_entity_1.Andrologico)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], AndrologicoService);
//# sourceMappingURL=andrologico.service.js.map