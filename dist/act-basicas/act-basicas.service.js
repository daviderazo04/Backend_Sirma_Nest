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
exports.ActBasicasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const act_basica_entity_1 = require("./entities/act-basica.entity");
const enfermeria_service_1 = require("../enfermeria/enfermeria.service");
let ActBasicasService = class ActBasicasService {
    actBasicasRepository;
    enfermeriaService;
    constructor(actBasicasRepository, enfermeriaService) {
        this.actBasicasRepository = actBasicasRepository;
        this.enfermeriaService = enfermeriaService;
    }
    async create(createDto) {
        if (!createDto.idenfermeria) {
            throw new common_1.NotFoundException('idEnfermeria es requerido para crear Act Basicas.');
        }
        const enfermeria = await this.enfermeriaService.findOne(createDto.idenfermeria);
        if (!enfermeria) {
            throw new common_1.NotFoundException(`Enfermería con ID ${createDto.idenfermeria} no encontrada.`);
        }
        const actBasicas = this.actBasicasRepository.create({
            idenfermeria: createDto.idenfermeria,
            abBanasolo: createDto.abBanasolo ?? null,
            abVistedesvistesolo: createDto.abVistedesvistesolo ?? null,
            abCuidaapariencia: createDto.abCuidaapariencia ?? null,
            abUsainodoro: createDto.abUsainodoro ?? null,
            abControlesfinteres: createDto.abControlesfinteres ?? null,
            abTrasacuestalevanta: createDto.abTrasacuestalevanta ?? null,
            abCamina: createDto.abCamina ?? null,
            abAlimenta: createDto.abAlimenta ?? null,
            abTotal: createDto.abTotal ?? null,
            idenfermeria2: enfermeria,
        });
        return await this.actBasicasRepository.save(actBasicas);
    }
    async findAll() {
        return await this.actBasicasRepository.find({
            relations: ['idenfermeria2'],
        });
    }
    async findOne(id) {
        const record = await this.actBasicasRepository.findOne({
            where: { idenfermeria: id },
            relations: ['idenfermeria2'],
        });
        if (!record) {
            throw new common_1.NotFoundException(`Act Basicas con ID ${id} no encontrado.`);
        }
        return record;
    }
    async update(id, updateDto) {
        const record = await this.actBasicasRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Act Basicas con ID ${id} no encontrado.`);
        }
        Object.assign(record, updateDto);
        return await this.actBasicasRepository.save(record);
    }
    async remove(id) {
        const record = await this.actBasicasRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Act Basicas con ID ${id} no encontrado.`);
        }
        await this.actBasicasRepository.delete({ idenfermeria: id });
        return {
            message: `Act Basicas con ID ${id} eliminado exitosamente.`,
        };
    }
};
exports.ActBasicasService = ActBasicasService;
exports.ActBasicasService = ActBasicasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(act_basica_entity_1.Actbasicas)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => enfermeria_service_1.EnfermeriaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enfermeria_service_1.EnfermeriaService])
], ActBasicasService);
//# sourceMappingURL=act-basicas.service.js.map