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
exports.GinecologicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ginecologico_entity_1 = require("./entities/ginecologico.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let GinecologicoService = class GinecologicoService {
    ginecologicoRepository;
    medicinaService;
    constructor(ginecologicoRepository, medicinaService) {
        this.ginecologicoRepository = ginecologicoRepository;
        this.medicinaService = medicinaService;
    }
    async create(createGinecologicoDto) {
        if (!createGinecologicoDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create a Ginecologico record.');
        }
        const medicina = await this.medicinaService.findOne(createGinecologicoDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createGinecologicoDto.idmedicina} not found.`);
        }
        const ginecologico = this.ginecologicoRepository.create({
            ...createGinecologicoDto,
            idmedicina2: medicina,
        });
        return await this.ginecologicoRepository.save(ginecologico);
    }
    async findAll() {
        return await this.ginecologicoRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const ginecologico = await this.ginecologicoRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!ginecologico) {
            throw new common_1.NotFoundException(`Ginecologico record with ID ${id} not found.`);
        }
        return ginecologico;
    }
    async update(id, updateGinecologicoDto) {
        const ginecologico = await this.ginecologicoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!ginecologico) {
            throw new common_1.NotFoundException(`Ginecologico record with ID ${id} not found.`);
        }
        Object.assign(ginecologico, updateGinecologicoDto);
        return await this.ginecologicoRepository.save(ginecologico);
    }
    async remove(id) {
        const ginecologico = await this.ginecologicoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!ginecologico) {
            throw new common_1.NotFoundException(`Ginecologico record with ID ${id} not found.`);
        }
        return await this.ginecologicoRepository.remove(ginecologico);
    }
};
exports.GinecologicoService = GinecologicoService;
exports.GinecologicoService = GinecologicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ginecologico_entity_1.Ginecologico)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], GinecologicoService);
//# sourceMappingURL=ginecologico.service.js.map