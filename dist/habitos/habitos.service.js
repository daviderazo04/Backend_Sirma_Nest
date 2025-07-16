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
exports.HabitoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const habito_entity_1 = require("./entities/habito.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let HabitoService = class HabitoService {
    habitosRepository;
    medicinaService;
    constructor(habitosRepository, medicinaService) {
        this.habitosRepository = habitosRepository;
        this.medicinaService = medicinaService;
    }
    async create(createHabitoDto) {
        if (!createHabitoDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create a Habito record.');
        }
        const medicina = await this.medicinaService.findOne(createHabitoDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createHabitoDto.idmedicina} not found.`);
        }
        const habitos = this.habitosRepository.create({
            ...createHabitoDto,
            idmedicina2: medicina,
        });
        return await this.habitosRepository.save(habitos);
    }
    async findAll() {
        return await this.habitosRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const habitos = await this.habitosRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!habitos) {
            throw new common_1.NotFoundException(`Habito record with ID ${id} not found.`);
        }
        return habitos;
    }
    async update(id, updateHabitoDto) {
        const habitos = await this.habitosRepository.findOne({
            where: { idmedicina: id },
        });
        if (!habitos) {
            throw new common_1.NotFoundException(`Habito record with ID ${id} not found.`);
        }
        Object.assign(habitos, updateHabitoDto);
        return await this.habitosRepository.save(habitos);
    }
    async remove(id) {
        const habitos = await this.habitosRepository.findOne({
            where: { idmedicina: id },
        });
        if (!habitos) {
            throw new common_1.NotFoundException(`Habito record with ID ${id} not found.`);
        }
        return await this.habitosRepository.remove(habitos);
    }
};
exports.HabitoService = HabitoService;
exports.HabitoService = HabitoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(habito_entity_1.Habitos)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], HabitoService);
//# sourceMappingURL=habitos.service.js.map