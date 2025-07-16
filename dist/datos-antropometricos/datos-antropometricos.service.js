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
exports.DatosantropometricosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nutricion_entity_1 = require("../nutricion/entities/nutricion.entity");
const datos_antropometrico_entity_1 = require("./entities/datos-antropometrico.entity");
let DatosantropometricosService = class DatosantropometricosService {
    datosantropometricosRepository;
    nutricionRepository;
    constructor(datosantropometricosRepository, nutricionRepository) {
        this.datosantropometricosRepository = datosantropometricosRepository;
        this.nutricionRepository = nutricionRepository;
    }
    async create(createDatosantropometricosDto) {
        const { idnutricion, ...datosantropometricosData } = createDatosantropometricosDto;
        const nutricion = await this.nutricionRepository.findOneBy({ idnutricion });
        if (!nutricion) {
            throw new common_1.NotFoundException(`Nutricion con ID ${idnutricion} no encontrada.`);
        }
        const existingDatos = await this.datosantropometricosRepository.findOneBy({ idnutricion });
        if (existingDatos) {
            throw new common_1.BadRequestException(`Ya existen datos antropométricos para el ID de Nutrición ${idnutricion}.`);
        }
        const nuevosDatos = this.datosantropometricosRepository.create({
            idnutricion: idnutricion,
            ...datosantropometricosData,
            idnutricion2: nutricion,
        });
        return this.datosantropometricosRepository.save(nuevosDatos);
    }
    async findAll() {
        return this.datosantropometricosRepository.find({
            relations: ['idnutricion2'],
        });
    }
    async findOne(id) {
        const datos = await this.datosantropometricosRepository.findOne({
            where: { idnutricion: id },
            relations: ['idnutricion2'],
        });
        if (!datos) {
            throw new common_1.NotFoundException(`Datos antropométricos con ID de Nutrición ${id} no encontrados.`);
        }
        return datos;
    }
    async update(id, updateDatosantropometricosDto) {
        const datos = await this.datosantropometricosRepository.findOneBy({ idnutricion: id });
        if (!datos) {
            throw new common_1.NotFoundException(`Datos antropométricos con ID de Nutrición ${id} no encontrados.`);
        }
        const { idnutricion, ...dataToUpdate } = updateDatosantropometricosDto;
        Object.assign(datos, dataToUpdate);
        return this.datosantropometricosRepository.save(datos);
    }
    async remove(id) {
        const result = await this.datosantropometricosRepository.delete(id);
        if (result.affected === 0 || result.affected === null) {
            throw new common_1.NotFoundException(`Datos antropométricos con ID de Nutrición ${id} no encontrados.`);
        }
        return { affected: result.affected ?? undefined };
    }
};
exports.DatosantropometricosService = DatosantropometricosService;
exports.DatosantropometricosService = DatosantropometricosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(datos_antropometrico_entity_1.Datosantropometricos)),
    __param(1, (0, typeorm_1.InjectRepository)(nutricion_entity_1.Nutricion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DatosantropometricosService);
//# sourceMappingURL=datos-antropometricos.service.js.map