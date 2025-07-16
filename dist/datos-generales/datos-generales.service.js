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
exports.DatosGeneralesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const datos_generale_entity_1 = require("./entities/datos-generale.entity");
const typeorm_2 = require("typeorm");
let DatosGeneralesService = class DatosGeneralesService {
    datosGeneralesRepository;
    constructor(datosGeneralesRepository) {
        this.datosGeneralesRepository = datosGeneralesRepository;
    }
    async create(dto) {
        const nuevo = this.datosGeneralesRepository.create({
            ...dto,
            idficha: { idficha: dto.idFicha },
        });
        return await this.datosGeneralesRepository.save(nuevo);
    }
    async findAll() {
        return await this.datosGeneralesRepository.find();
    }
    async findOne(id) {
        const datogeneral = await this.datosGeneralesRepository.findOne({
            where: { iddatosgenerales: id },
        });
        if (!datogeneral) {
            throw new common_1.NotFoundException(`Datogeneral con ID ${id} no encontrada.`);
        }
        return datogeneral;
    }
    async update(id, updateDatosGeneraleDto) {
        const datogeneral = await this.findOne(id);
        Object.assign(datogeneral, updateDatosGeneraleDto);
        return await this.datosGeneralesRepository.save(datogeneral);
    }
    async remove(id) {
        const result = await this.datosGeneralesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Datogeneral con ID ${id} no encontrada.`);
        }
    }
};
exports.DatosGeneralesService = DatosGeneralesService;
exports.DatosGeneralesService = DatosGeneralesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(datos_generale_entity_1.Datosgenerales)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DatosGeneralesService);
//# sourceMappingURL=datos-generales.service.js.map