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
exports.OtrosRiesgosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const otros_riesgo_entity_1 = require("./entities/otros-riesgo.entity");
const enfermeria_service_1 = require("../enfermeria/enfermeria.service");
let OtrosRiesgosService = class OtrosRiesgosService {
    otrosRiesgosRepository;
    enfermeriaService;
    constructor(otrosRiesgosRepository, enfermeriaService) {
        this.otrosRiesgosRepository = otrosRiesgosRepository;
        this.enfermeriaService = enfermeriaService;
    }
    async create(createOtrosRiesgoDto) {
        if (!createOtrosRiesgoDto.idenfermeria) {
            throw new common_1.NotFoundException('idEnfermeria es requerido para crear un registro de Otros Riesgos.');
        }
        const enfermeria = await this.enfermeriaService.findOne(createOtrosRiesgoDto.idenfermeria);
        if (!enfermeria) {
            throw new common_1.NotFoundException(`Enfermería con ID ${createOtrosRiesgoDto.idenfermeria} no encontrada.`);
        }
        const otrosRiesgos = this.otrosRiesgosRepository.create({
            orGrupoedad: createOtrosRiesgoDto.orGrupoEdad,
            orVivecon: createOtrosRiesgoDto.orViveCon,
            orMovilidad: createOtrosRiesgoDto.orMovilidad,
            orEnfermedadaguda: createOtrosRiesgoDto.orEnfermedadAguda,
            orNeuropsico: createOtrosRiesgoDto.orNeuropsico,
            orTotal: createOtrosRiesgoDto.orTotal,
            idenfermeria2: enfermeria,
        });
        return await this.otrosRiesgosRepository.save(otrosRiesgos);
    }
    async findAll() {
        return await this.otrosRiesgosRepository.find({
            relations: ['idenfermeria2'],
        });
    }
    async findOne(id) {
        const otrosRiesgos = await this.otrosRiesgosRepository.findOne({
            where: { idenfermeria: id },
            relations: ['idenfermeria2'],
        });
        if (!otrosRiesgos) {
            throw new common_1.NotFoundException(`Registro de Otros Riesgos con ID ${id} no encontrado.`);
        }
        return otrosRiesgos;
    }
    async update(id, updateOtrosRiesgoDto) {
        const otrosRiesgos = await this.otrosRiesgosRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!otrosRiesgos) {
            throw new common_1.NotFoundException(`Registro de Otros Riesgos con ID ${id} no encontrado.`);
        }
        const updateData = {};
        for (const [key, value] of Object.entries(updateOtrosRiesgoDto)) {
            if (value !== undefined) {
                const numValue = value;
                switch (key) {
                    case 'orGrupoEdad':
                        updateData.orGrupoedad = numValue;
                        break;
                    case 'orViveCon':
                        updateData.orVivecon = numValue;
                        break;
                    case 'orMovilidad':
                        updateData.orMovilidad = numValue;
                        break;
                    case 'orEnfermedadAguda':
                        updateData.orEnfermedadaguda = numValue;
                        break;
                    case 'orNeuropsico':
                        updateData.orNeuropsico = numValue;
                        break;
                    case 'orTotal':
                        updateData.orTotal = numValue;
                        break;
                }
            }
        }
        Object.assign(otrosRiesgos, updateData);
        return await this.otrosRiesgosRepository.save(otrosRiesgos);
    }
    async remove(id) {
        const otrosRiesgos = await this.otrosRiesgosRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!otrosRiesgos) {
            throw new common_1.NotFoundException(`Registro de Otros Riesgos con ID ${id} no encontrado.`);
        }
        return await this.otrosRiesgosRepository.remove(otrosRiesgos);
    }
};
exports.OtrosRiesgosService = OtrosRiesgosService;
exports.OtrosRiesgosService = OtrosRiesgosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(otros_riesgo_entity_1.Otrosriesgos)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => enfermeria_service_1.EnfermeriaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enfermeria_service_1.EnfermeriaService])
], OtrosRiesgosService);
//# sourceMappingURL=otros-riesgos.service.js.map