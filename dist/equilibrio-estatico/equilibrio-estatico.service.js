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
exports.EquilibrioEstaticoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const equilibrio_estatico_entity_1 = require("./entities/equilibrio-estatico.entity");
const fisioterapia_service_1 = require("../fisioterapia/fisioterapia.service");
let EquilibrioEstaticoService = class EquilibrioEstaticoService {
    equilibrioestaticoRepository;
    fisioterapiaService;
    constructor(equilibrioestaticoRepository, fisioterapiaService) {
        this.equilibrioestaticoRepository = equilibrioestaticoRepository;
        this.fisioterapiaService = fisioterapiaService;
    }
    async create(createEquilibrioEstaticoDto) {
        const { idfisioterapia, ...restOfDto } = createEquilibrioEstaticoDto;
        const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
        if (!fisioterapia) {
            throw new common_1.NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        const existingEquilibrioestatico = await this.equilibrioestaticoRepository.findOne({
            where: { idfisioterapia: idfisioterapia },
        });
        if (existingEquilibrioestatico) {
            throw new common_1.ConflictException(`Ya existe un registro de Equilibrio Estático para la Fisioterapia con ID ${idfisioterapia}. Use PATCH para actualizarlo.`);
        }
        const equilibrioestatico = this.equilibrioestaticoRepository.create({
            idfisioterapia: idfisioterapia,
            idfisioterapia2: fisioterapia,
            ...restOfDto,
        });
        return await this.equilibrioestaticoRepository.save(equilibrioestatico);
    }
    async findAll() {
        return await this.equilibrioestaticoRepository.find({
            relations: ['idfisioterapia2'],
        });
    }
    async findOne(idfisioterapia) {
        const equilibrioestatico = await this.equilibrioestaticoRepository.findOne({
            where: { idfisioterapia: idfisioterapia },
            relations: ['idfisioterapia2'],
        });
        if (!equilibrioestatico) {
            throw new common_1.NotFoundException(`Registro de Equilibrio Estático para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        return equilibrioestatico;
    }
    async update(idfisioterapia, updateEquilibrioEstaticoDto) {
        const equilibrioestatico = await this.equilibrioestaticoRepository.findOne({ where: { idfisioterapia: idfisioterapia } });
        if (!equilibrioestatico) {
            throw new common_1.NotFoundException(`Registro de Equilibrio Estático para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        const { idfisioterapia: dtoIdfisioterapia, ...restOfDto } = updateEquilibrioEstaticoDto;
        Object.assign(equilibrioestatico, restOfDto);
        return await this.equilibrioestaticoRepository.save(equilibrioestatico);
    }
    async remove(idfisioterapia) {
        const result = await this.equilibrioestaticoRepository.delete(idfisioterapia);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Registro de Equilibrio Estático para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
    }
};
exports.EquilibrioEstaticoService = EquilibrioEstaticoService;
exports.EquilibrioEstaticoService = EquilibrioEstaticoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(equilibrio_estatico_entity_1.Equilibrioestatico)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => fisioterapia_service_1.FisioterapiaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        fisioterapia_service_1.FisioterapiaService])
], EquilibrioEstaticoService);
//# sourceMappingURL=equilibrio-estatico.service.js.map