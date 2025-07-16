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
exports.AlertaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alerta_entity_1 = require("./entities/alerta.entity");
const medicina_service_1 = require("../medicina/medicina.service");
let AlertaService = class AlertaService {
    alertaRepository;
    medicinaService;
    constructor(alertaRepository, medicinaService) {
        this.alertaRepository = alertaRepository;
        this.medicinaService = medicinaService;
    }
    async create(createAlertaDto) {
        if (!createAlertaDto.idmedicina) {
            throw new common_1.NotFoundException('Medicina ID is required to create an Alerta record.');
        }
        const medicina = await this.medicinaService.findOne(createAlertaDto.idmedicina);
        if (!medicina) {
            throw new common_1.NotFoundException(`Medicina with ID ${createAlertaDto.idmedicina} not found.`);
        }
        const alerta = this.alertaRepository.create({
            ...createAlertaDto,
            idmedicina2: medicina,
        });
        return await this.alertaRepository.save(alerta);
    }
    async findAll() {
        return await this.alertaRepository.find({
            relations: ['idmedicina2'],
        });
    }
    async findOne(id) {
        const alerta = await this.alertaRepository.findOne({
            where: { idmedicina: id },
            relations: ['idmedicina2'],
        });
        if (!alerta) {
            throw new common_1.NotFoundException(`Alerta record with ID ${id} not found.`);
        }
        return alerta;
    }
    async update(id, updateAlertaDto) {
        const alerta = await this.alertaRepository.findOne({
            where: { idmedicina: id },
        });
        if (!alerta) {
            throw new common_1.NotFoundException(`Alerta record with ID ${id} not found.`);
        }
        Object.assign(alerta, updateAlertaDto);
        return await this.alertaRepository.save(alerta);
    }
    async remove(id) {
        const alerta = await this.alertaRepository.findOne({
            where: { idmedicina: id },
        });
        if (!alerta) {
            throw new common_1.NotFoundException(`Alerta record with ID ${id} not found.`);
        }
        return await this.alertaRepository.remove(alerta);
    }
};
exports.AlertaService = AlertaService;
exports.AlertaService = AlertaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alerta_entity_1.Alerta)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => medicina_service_1.MedicinaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        medicina_service_1.MedicinaService])
], AlertaService);
//# sourceMappingURL=alerta.service.js.map