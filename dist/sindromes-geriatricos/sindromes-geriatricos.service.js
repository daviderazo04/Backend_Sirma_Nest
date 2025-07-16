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
exports.SindromesGeriatricosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sindromes_geriatrico_entity_1 = require("./entities/sindromes-geriatrico.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let SindromesGeriatricosService = class SindromesGeriatricosService {
    sindromesGeriatricosRepository;
    medicinaService;
    constructor(sindromesGeriatricosRepository, medicinaService) {
        this.sindromesGeriatricosRepository = sindromesGeriatricosRepository;
        this.medicinaService = medicinaService;
    }
    async create(createSindromesGeriatricoDto) {
        if (!createSindromesGeriatricoDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create a Sindromes Geriatrico record.');
        }
        const medicina = await this.medicinaService.findOne(createSindromesGeriatricoDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createSindromesGeriatricoDto.idmedicina} not found.`);
        }
        const sindromesGeriatricos = this.sindromesGeriatricosRepository.create({
            ...createSindromesGeriatricoDto,
            idmedicina2: medicina,
        });
        return await this.sindromesGeriatricosRepository.save(sindromesGeriatricos);
    }
    async findAll() {
        return await this.sindromesGeriatricosRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const sindromesGeriatricos = await this.sindromesGeriatricosRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!sindromesGeriatricos) {
            throw new common_1.NotFoundException(`Sindromes Geriatrico record with ID ${id} not found.`);
        }
        return sindromesGeriatricos;
    }
    async update(id, updateSindromesGeriatricoDto) {
        const sindromesGeriatricos = await this.sindromesGeriatricosRepository.findOne({
            where: { idmedicina: id },
        });
        if (!sindromesGeriatricos) {
            throw new common_1.NotFoundException(`Sindromes Geriatrico record with ID ${id} not found.`);
        }
        Object.assign(sindromesGeriatricos, updateSindromesGeriatricoDto);
        return await this.sindromesGeriatricosRepository.save(sindromesGeriatricos);
    }
    async remove(id) {
        const sindromesGeriatricos = await this.sindromesGeriatricosRepository.findOne({
            where: { idmedicina: id },
        });
        if (!sindromesGeriatricos) {
            throw new common_1.NotFoundException(`Sindromes Geriatrico record with ID ${id} not found.`);
        }
        return await this.sindromesGeriatricosRepository.remove(sindromesGeriatricos);
    }
};
exports.SindromesGeriatricosService = SindromesGeriatricosService;
exports.SindromesGeriatricosService = SindromesGeriatricosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sindromes_geriatrico_entity_1.Sindromesgeriatricos)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], SindromesGeriatricosService);
//# sourceMappingURL=sindromes-geriatricos.service.js.map