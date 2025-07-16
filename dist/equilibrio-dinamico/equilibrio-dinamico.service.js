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
exports.EquilibrioDinamicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const equilibrio_dinamico_entity_1 = require("./entities/equilibrio-dinamico.entity");
const fisioterapia_service_1 = require("../fisioterapia/fisioterapia.service");
let EquilibrioDinamicoService = class EquilibrioDinamicoService {
    equilibriodinamicoRepository;
    fisioterapiaService;
    constructor(equilibriodinamicoRepository, fisioterapiaService) {
        this.equilibriodinamicoRepository = equilibriodinamicoRepository;
        this.fisioterapiaService = fisioterapiaService;
    }
    async create(createEquilibrioDinamicoDto) {
        const { idfisioterapia, ...restOfDto } = createEquilibrioDinamicoDto;
        const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
        if (!fisioterapia) {
            throw new common_1.NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        const existingEquilibriodinamico = await this.equilibriodinamicoRepository.findOne({
            where: { idfisioterapia: idfisioterapia },
        });
        if (existingEquilibriodinamico) {
            throw new common_1.ConflictException(`Ya existe un registro de Equilibrio Dinámico para la Fisioterapia con ID ${idfisioterapia}. Use PATCH para actualizarlo.`);
        }
        const equilibriodinamico = this.equilibriodinamicoRepository.create({
            idfisioterapia: idfisioterapia,
            idfisioterapia2: fisioterapia,
            ...restOfDto,
        });
        return await this.equilibriodinamicoRepository.save(equilibriodinamico);
    }
    async findAll() {
        return await this.equilibriodinamicoRepository.find({
            relations: ['idfisioterapia2'],
        });
    }
    async findOne(idfisioterapia) {
        const equilibriodinamico = await this.equilibriodinamicoRepository.findOne({
            where: { idfisioterapia: idfisioterapia },
            relations: ['idfisioterapia2'],
        });
        if (!equilibriodinamico) {
            throw new common_1.NotFoundException(`Registro de Equilibrio Dinámico para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        return equilibriodinamico;
    }
    async update(idfisioterapia, updateEquilibrioDinamicoDto) {
        const equilibriodinamico = await this.equilibriodinamicoRepository.findOne({ where: { idfisioterapia: idfisioterapia } });
        if (!equilibriodinamico) {
            throw new common_1.NotFoundException(`Registro de Equilibrio Dinámico para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        const { idfisioterapia: dtoIdfisioterapia, ...restOfDto } = updateEquilibrioDinamicoDto;
        Object.assign(equilibriodinamico, restOfDto);
        return await this.equilibriodinamicoRepository.save(equilibriodinamico);
    }
    async remove(idfisioterapia) {
        const result = await this.equilibriodinamicoRepository.delete(idfisioterapia);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Registro de Equilibrio Dinámico para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
    }
};
exports.EquilibrioDinamicoService = EquilibrioDinamicoService;
exports.EquilibrioDinamicoService = EquilibrioDinamicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(equilibrio_dinamico_entity_1.Equilibriodinamico)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => fisioterapia_service_1.FisioterapiaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        fisioterapia_service_1.FisioterapiaService])
], EquilibrioDinamicoService);
//# sourceMappingURL=equilibrio-dinamico.service.js.map