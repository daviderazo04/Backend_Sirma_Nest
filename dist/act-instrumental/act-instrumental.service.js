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
exports.ActInstrumentalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const act_instrumental_entity_1 = require("./entities/act-instrumental.entity");
const enfermeria_service_1 = require("../enfermeria/enfermeria.service");
let ActInstrumentalService = class ActInstrumentalService {
    actInstrumentalRepository;
    enfermeriaService;
    constructor(actInstrumentalRepository, enfermeriaService) {
        this.actInstrumentalRepository = actInstrumentalRepository;
        this.enfermeriaService = enfermeriaService;
    }
    async create(createDto) {
        if (!createDto.idenfermeria) {
            throw new common_1.NotFoundException('idEnfermeria es requerido para crear Act Instrumental.');
        }
        const enfermeria = await this.enfermeriaService.findOne(createDto.idenfermeria);
        if (!enfermeria) {
            throw new common_1.NotFoundException(`Enfermería con ID ${createDto.idenfermeria} no encontrada.`);
        }
        const actInstrumental = this.actInstrumentalRepository.create({
            idenfermeria: createDto.idenfermeria,
            aiCuidacasa: createDto.aiCuidaCasa,
            aiUsatelefono: createDto.aiUsaTelefono,
            aiMediotransporte: createDto.aiMediosTransporte,
            aiPreparacomida: createDto.aiPreparaComida,
            aiLavaropa: createDto.aiLavaRopa,
            aiVacompras: createDto.aiVaCompras,
            aiManejadinero: createDto.aiManejaDinero,
            aiManejamedicina: createDto.aiManejaMedicina,
            aiTotal: createDto.aiTotales,
            idenfermeria2: enfermeria,
        });
        return await this.actInstrumentalRepository.save(actInstrumental);
    }
    async findAll() {
        return await this.actInstrumentalRepository.find({
            relations: ['idenfermeria2'],
        });
    }
    async findOne(id) {
        const record = await this.actInstrumentalRepository.findOne({
            where: { idenfermeria: id },
            relations: ['idenfermeria2'],
        });
        if (!record) {
            throw new common_1.NotFoundException(`Act Instrumental con ID ${id} no encontrado.`);
        }
        return record;
    }
    async update(id, updateDto) {
        const record = await this.actInstrumentalRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Act Instrumental con ID ${id} no encontrado.`);
        }
        const updateData = {};
        if (updateDto.aiCuidaCasa !== undefined) {
            updateData.aiCuidacasa = updateDto.aiCuidaCasa;
        }
        if (updateDto.aiUsaTelefono !== undefined) {
            updateData.aiUsatelefono = updateDto.aiUsaTelefono;
        }
        if (updateDto.aiMediosTransporte !== undefined) {
            updateData.aiMediotransporte = updateDto.aiMediosTransporte;
        }
        if (updateDto.aiPreparaComida !== undefined) {
            updateData.aiPreparacomida = updateDto.aiPreparaComida;
        }
        if (updateDto.aiLavaRopa !== undefined) {
            updateData.aiLavaropa = updateDto.aiLavaRopa;
        }
        if (updateDto.aiVaCompras !== undefined) {
            updateData.aiVacompras = updateDto.aiVaCompras;
        }
        if (updateDto.aiManejaDinero !== undefined) {
            updateData.aiManejadinero = updateDto.aiManejaDinero;
        }
        if (updateDto.aiManejaMedicina !== undefined) {
            updateData.aiManejamedicina = updateDto.aiManejaMedicina;
        }
        if (updateDto.aiTotales !== undefined) {
            updateData.aiTotal = updateDto.aiTotales;
        }
        Object.assign(record, updateData);
        return await this.actInstrumentalRepository.save(record);
    }
    async remove(id) {
        const record = await this.actInstrumentalRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Act Instrumental con ID ${id} no encontrado.`);
        }
        await this.actInstrumentalRepository.delete({ idenfermeria: id });
        return {
            message: `Act Instrumental con ID ${id} eliminado exitosamente.`,
        };
    }
};
exports.ActInstrumentalService = ActInstrumentalService;
exports.ActInstrumentalService = ActInstrumentalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(act_instrumental_entity_1.Actinstrumental)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => enfermeria_service_1.EnfermeriaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enfermeria_service_1.EnfermeriaService])
], ActInstrumentalService);
//# sourceMappingURL=act-instrumental.service.js.map