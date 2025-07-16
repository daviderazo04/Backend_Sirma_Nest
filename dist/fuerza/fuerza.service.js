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
exports.FuerzaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fuerza_entity_1 = require("./entities/fuerza.entity");
const fisioterapia_service_1 = require("../fisioterapia/fisioterapia.service");
let FuerzaService = class FuerzaService {
    fuerzaRepository;
    fisioterapiaService;
    constructor(fuerzaRepository, fisioterapiaService) {
        this.fuerzaRepository = fuerzaRepository;
        this.fisioterapiaService = fisioterapiaService;
    }
    async create(createFuerzaDto) {
        const { idfisioterapia, ...restOfDto } = createFuerzaDto;
        const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
        if (!fisioterapia) {
            throw new common_1.NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        const existingFuerza = await this.fuerzaRepository.findOne({
            where: { idfisioterapia: idfisioterapia },
        });
        if (existingFuerza) {
            throw new common_1.ConflictException(`Ya existe un registro de Fuerza para la Fisioterapia con ID ${idfisioterapia}. Use PATCH para actualizarlo.`);
        }
        const fuerza = this.fuerzaRepository.create({
            idfisioterapia: idfisioterapia,
            idfisioterapia2: fisioterapia,
            ...restOfDto,
        });
        return await this.fuerzaRepository.save(fuerza);
    }
    async findAll() {
        return await this.fuerzaRepository.find({
            relations: ['idfisioterapia2'],
        });
    }
    async findOne(idfisioterapia) {
        const fuerza = await this.fuerzaRepository.findOne({
            where: { idfisioterapia: idfisioterapia },
            relations: ['idfisioterapia2'],
        });
        if (!fuerza) {
            throw new common_1.NotFoundException(`Registro de Fuerza para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        return fuerza;
    }
    async update(idfisioterapia, updateFuerzaDto) {
        const fuerza = await this.fuerzaRepository.findOne({ where: { idfisioterapia: idfisioterapia } });
        if (!fuerza) {
            throw new common_1.NotFoundException(`Registro de Fuerza para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        const { idfisioterapia: dtoIdfisioterapia, ...restOfDto } = updateFuerzaDto;
        Object.assign(fuerza, restOfDto);
        return await this.fuerzaRepository.save(fuerza);
    }
    async remove(idfisioterapia) {
        const result = await this.fuerzaRepository.delete(idfisioterapia);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Registro de Fuerza para Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
    }
};
exports.FuerzaService = FuerzaService;
exports.FuerzaService = FuerzaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fuerza_entity_1.Fuerza)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => fisioterapia_service_1.FisioterapiaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        fisioterapia_service_1.FisioterapiaService])
], FuerzaService);
//# sourceMappingURL=fuerza.service.js.map