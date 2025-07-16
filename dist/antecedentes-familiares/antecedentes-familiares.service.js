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
exports.AntecedentesfamiliaresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const antecedentes_familiare_entity_1 = require("./entities/antecedentes-familiare.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let AntecedentesfamiliaresService = class AntecedentesfamiliaresService {
    antecedentesfamiliaresRepository;
    medicinaService;
    constructor(antecedentesfamiliaresRepository, medicinaService) {
        this.antecedentesfamiliaresRepository = antecedentesfamiliaresRepository;
        this.medicinaService = medicinaService;
    }
    async create(createAntecedentesFamiliareDto) {
        if (!createAntecedentesFamiliareDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create an AntecedentesFamiliares record.');
        }
        const medicina = await this.medicinaService.findOne(createAntecedentesFamiliareDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createAntecedentesFamiliareDto.idmedicina} not found.`);
        }
        const antecedentesfamiliares = this.antecedentesfamiliaresRepository.create({
            ...createAntecedentesFamiliareDto,
            idmedicina2: medicina,
        });
        return await this.antecedentesfamiliaresRepository.save(antecedentesfamiliares);
    }
    async findAll() {
        return await this.antecedentesfamiliaresRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const antecedentesfamiliares = await this.antecedentesfamiliaresRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!antecedentesfamiliares) {
            throw new common_1.NotFoundException(`AntecedentesFamiliares record with ID ${id} not found.`);
        }
        return antecedentesfamiliares;
    }
    async update(id, updateAntecedentesfamiliaresDto) {
        const antecedentesfamiliares = await this.antecedentesfamiliaresRepository.findOne({
            where: { idmedicina: id },
        });
        if (!antecedentesfamiliares) {
            throw new common_1.NotFoundException(`AntecedentesFamiliares record with ID ${id} not found.`);
        }
        Object.assign(antecedentesfamiliares, updateAntecedentesfamiliaresDto);
        return await this.antecedentesfamiliaresRepository.save(antecedentesfamiliares);
    }
    async remove(id) {
        const antecedentesfamiliares = await this.antecedentesfamiliaresRepository.findOne({
            where: { idmedicina: id },
        });
        if (!antecedentesfamiliares) {
            throw new common_1.NotFoundException(`AntecedentesFamiliares record with ID ${id} not found.`);
        }
        return await this.antecedentesfamiliaresRepository.remove(antecedentesfamiliares);
    }
};
exports.AntecedentesfamiliaresService = AntecedentesfamiliaresService;
exports.AntecedentesfamiliaresService = AntecedentesfamiliaresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(antecedentes_familiare_entity_1.Antecedentesfamiliares)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], AntecedentesfamiliaresService);
//# sourceMappingURL=antecedentes-familiares.service.js.map