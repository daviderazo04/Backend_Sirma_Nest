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
exports.CognitivoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cognitivo_entity_1 = require("./entities/cognitivo.entity");
const enfermeria_service_1 = require("../enfermeria/enfermeria.service");
let CognitivoService = class CognitivoService {
    cognitivoRepository;
    enfermeriaService;
    constructor(cognitivoRepository, enfermeriaService) {
        this.cognitivoRepository = cognitivoRepository;
        this.enfermeriaService = enfermeriaService;
    }
    async create(createCognitivoDto) {
        if (!createCognitivoDto.idenfermeria) {
            throw new common_1.NotFoundException('idEnfermeria es requerido para crear un registro de Cognitivo.');
        }
        const enfermeria = await this.enfermeriaService.findOne(createCognitivoDto.idenfermeria);
        if (!enfermeria) {
            throw new common_1.NotFoundException(`Enfermería con ID ${createCognitivoDto.idenfermeria} no encontrada.`);
        }
        const rest = { ...createCognitivoDto };
        const cognitivo = this.cognitivoRepository.create({
            cogSabefecha: rest.cogSabeFecha,
            cogAprendetres: rest.cogAprendeDeTres,
            cogRepitealreves: rest.cogRepiteAlreves,
            cogTomadoblacoloca: rest.cogTomaDoblaColoca,
            cogRepitepalabras: rest.cogRepitePalabras,
            cogCopiacirculos: rest.cogCopiaCirculos,
            cogTotal: rest.cogTotal,
            idenfermeria2: enfermeria,
            idenfermeria: rest.idenfermeria,
        });
        return await this.cognitivoRepository.save(cognitivo);
    }
    async findAll() {
        return await this.cognitivoRepository.find({
            relations: ['idenfermeria2'],
        });
    }
    async findOne(id) {
        const cognitivo = await this.cognitivoRepository.findOne({
            where: { idenfermeria: id },
            relations: ['idenfermeria2'],
        });
        if (!cognitivo) {
            throw new common_1.NotFoundException(`Registro Cognitivo con ID ${id} no encontrado.`);
        }
        return cognitivo;
    }
    async update(id, updateCognitivoDto) {
        const cognitivo = await this.cognitivoRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!cognitivo) {
            throw new common_1.NotFoundException(`Registro Cognitivo con ID ${id} no encontrado.`);
        }
        const updateData = {};
        for (const [key, value] of Object.entries(updateCognitivoDto)) {
            if (value !== undefined) {
                const numValue = value;
                switch (key) {
                    case 'cogSabeFecha':
                        updateData.cogSabefecha = numValue;
                        break;
                    case 'cogAprendeDeTres':
                        updateData.cogAprendetres = numValue;
                        break;
                    case 'cogRepiteAlreves':
                        updateData.cogRepitealreves = numValue;
                        break;
                    case 'cogTomaDoblaColoca':
                        updateData.cogTomadoblacoloca = numValue;
                        break;
                    case 'cogRepitePalabras':
                        updateData.cogRepitepalabras = numValue;
                        break;
                    case 'cogCopiaCirculos':
                        updateData.cogCopiacirculos = numValue;
                        break;
                    case 'cogTotal':
                        updateData.cogTotal = numValue;
                        break;
                }
            }
        }
        Object.assign(cognitivo, updateData);
        return await this.cognitivoRepository.save(cognitivo);
    }
    async remove(id) {
        const cognitivo = await this.cognitivoRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!cognitivo) {
            throw new common_1.NotFoundException(`Registro Cognitivo con ID ${id} no encontrado.`);
        }
        await this.cognitivoRepository.delete({ idenfermeria: id });
        return {
            message: `Registro Cognitivo con ID ${id} eliminado exitosamente.`,
        };
    }
};
exports.CognitivoService = CognitivoService;
exports.CognitivoService = CognitivoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cognitivo_entity_1.Cognitivo)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => enfermeria_service_1.EnfermeriaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enfermeria_service_1.EnfermeriaService])
], CognitivoService);
//# sourceMappingURL=cognitivo.service.js.map