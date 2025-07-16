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
exports.TamizajeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tamizaje_entity_1 = require("./entities/tamizaje.entity");
const enfermeria_service_1 = require("../enfermeria/enfermeria.service");
let TamizajeService = class TamizajeService {
    tamizajeRepository;
    enfermeriaService;
    constructor(tamizajeRepository, enfermeriaService) {
        this.tamizajeRepository = tamizajeRepository;
        this.enfermeriaService = enfermeriaService;
    }
    async create(createDto) {
        if (!createDto.idenfermeria) {
            throw new common_1.NotFoundException('idEnfermeria es requerido para crear Tamizaje.');
        }
        const enfermeria = await this.enfermeriaService.findOne(createDto.idenfermeria);
        if (!enfermeria) {
            throw new common_1.NotFoundException(`Enfermería con ID ${createDto.idenfermeria} no encontrada.`);
        }
        const tamizaje = this.tamizajeRepository.create({
            idenfermeria: createDto.idenfermeria,
            tamDifvisual: createDto.tamDifvisual ?? null,
            tamDifauditiva: createDto.tamDifauditiva ?? null,
            tamLevanteanda: createDto.tamLevanteanda ?? null,
            tamPerdidaorina: createDto.tamPerdidaorina ?? null,
            tamPerdidapeso: createDto.tamPerdidapeso ?? null,
            tamPerdidamemoria: createDto.tamPerdidamemoria ?? null,
            tamTristedeprimido: createDto.tamTristedeprimido ?? null,
            tamBanarsolo: createDto.tamBanarsolo ?? null,
            tamComprasolo: createDto.tamComprasolo ?? null,
            tamVivesolo: createDto.tamVivesolo ?? null,
            tamTotal: createDto.tamTotal ?? null,
            idenfermeria2: enfermeria,
        });
        return await this.tamizajeRepository.save(tamizaje);
    }
    async findAll() {
        return await this.tamizajeRepository.find({
            relations: ['idenfermeria2'],
        });
    }
    async findOne(id) {
        const tamizaje = await this.tamizajeRepository.findOne({
            where: { idenfermeria: id },
            relations: ['idenfermeria2'],
        });
        if (!tamizaje) {
            throw new common_1.NotFoundException(`Tamizaje con ID ${id} no encontrado.`);
        }
        return tamizaje;
    }
    async update(id, updateDto) {
        const record = await this.tamizajeRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Tamizaje con ID ${id} no encontrado.`);
        }
        Object.assign(record, updateDto);
        return await this.tamizajeRepository.save(record);
    }
    async remove(id) {
        const record = await this.tamizajeRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Tamizaje con ID ${id} no encontrado.`);
        }
        await this.tamizajeRepository.delete({ idenfermeria: id });
        return {
            message: `Tamizaje con ID ${id} eliminado exitosamente.`,
        };
    }
};
exports.TamizajeService = TamizajeService;
exports.TamizajeService = TamizajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tamizaje_entity_1.Tamizaje)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => enfermeria_service_1.EnfermeriaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enfermeria_service_1.EnfermeriaService])
], TamizajeService);
//# sourceMappingURL=tamizaje.service.js.map