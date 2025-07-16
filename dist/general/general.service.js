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
exports.GeneralService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const general_entity_1 = require("./entities/general.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let GeneralService = class GeneralService {
    generalRepository;
    medicinaService;
    constructor(generalRepository, medicinaService) {
        this.generalRepository = generalRepository;
        this.medicinaService = medicinaService;
    }
    async create(createGeneralDto) {
        if (!createGeneralDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create a General record.');
        }
        const medicina = await this.medicinaService.findOne(createGeneralDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createGeneralDto.idmedicina} not found.`);
        }
        const general = this.generalRepository.create({
            ...createGeneralDto,
            idmedicina2: medicina,
        });
        return await this.generalRepository.save(general);
    }
    async findAll() {
        return await this.generalRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const general = await this.generalRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!general) {
            throw new common_1.NotFoundException(`General record with ID ${id} not found.`);
        }
        return general;
    }
    async update(id, updateGeneralDto) {
        const general = await this.generalRepository.findOne({
            where: { idmedicina: id },
        });
        if (!general) {
            throw new common_1.NotFoundException(`General record with ID ${id} not found.`);
        }
        Object.assign(general, updateGeneralDto);
        return await this.generalRepository.save(general);
    }
    async remove(id) {
        const general = await this.generalRepository.findOne({
            where: { idmedicina: id },
        });
        if (!general) {
            throw new common_1.NotFoundException(`General record with ID ${id} not found.`);
        }
        return await this.generalRepository.remove(general);
    }
};
exports.GeneralService = GeneralService;
exports.GeneralService = GeneralService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(general_entity_1.General)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], GeneralService);
//# sourceMappingURL=general.service.js.map