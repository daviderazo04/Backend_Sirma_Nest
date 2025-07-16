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
exports.FarmacologicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const farmacologico_entity_1 = require("./entities/farmacologico.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let FarmacologicoService = class FarmacologicoService {
    farmacologicoRepository;
    medicinaService;
    constructor(farmacologicoRepository, medicinaService) {
        this.farmacologicoRepository = farmacologicoRepository;
        this.medicinaService = medicinaService;
    }
    async create(createFarmacologicoDto) {
        if (!createFarmacologicoDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create a Farmacologico record.');
        }
        const medicina = await this.medicinaService.findOne(createFarmacologicoDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createFarmacologicoDto.idmedicina} not found.`);
        }
        const farmacologico = this.farmacologicoRepository.create({
            ...createFarmacologicoDto,
            idmedicina2: medicina,
        });
        return await this.farmacologicoRepository.save(farmacologico);
    }
    async findAll() {
        return await this.farmacologicoRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const farmacologico = await this.farmacologicoRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!farmacologico) {
            throw new common_1.NotFoundException(`Farmacologico record with ID ${id} not found.`);
        }
        return farmacologico;
    }
    async update(id, updateFarmacologicoDto) {
        const farmacologico = await this.farmacologicoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!farmacologico) {
            throw new common_1.NotFoundException(`Farmacologico record with ID ${id} not found.`);
        }
        Object.assign(farmacologico, updateFarmacologicoDto);
        return await this.farmacologicoRepository.save(farmacologico);
    }
    async remove(id) {
        const farmacologico = await this.farmacologicoRepository.findOne({
            where: { idmedicina: id },
        });
        if (!farmacologico) {
            throw new common_1.NotFoundException(`Farmacologico record with ID ${id} not found.`);
        }
        return await this.farmacologicoRepository.remove(farmacologico);
    }
};
exports.FarmacologicoService = FarmacologicoService;
exports.FarmacologicoService = FarmacologicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(farmacologico_entity_1.Farmacologico)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], FarmacologicoService);
//# sourceMappingURL=farmacologico.service.js.map