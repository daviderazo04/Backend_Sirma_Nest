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
exports.DolorFisioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dolor_fisio_entity_1 = require("./entities/dolor-fisio.entity");
const fisioterapia_service_1 = require("../fisioterapia/fisioterapia.service");
const zonadolor_service_1 = require("../zonadolor/zonadolor.service");
let DolorFisioService = class DolorFisioService {
    dolorfisioRepository;
    fisioterapiaService;
    zonadolorService;
    constructor(dolorfisioRepository, fisioterapiaService, zonadolorService) {
        this.dolorfisioRepository = dolorfisioRepository;
        this.fisioterapiaService = fisioterapiaService;
        this.zonadolorService = zonadolorService;
    }
    async create(createDolorFisioDto) {
        const { idfisioterapia, idzona, ...restOfDto } = createDolorFisioDto;
        const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
        if (!fisioterapia) {
            throw new common_1.NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
        }
        const zonadolor = await this.zonadolorService.findOne(idzona);
        if (!zonadolor) {
            throw new common_1.NotFoundException(`Zona de Dolor con ID ${idzona} no encontrada.`);
        }
        const dolorfisio = this.dolorfisioRepository.create({
            idfisioterapia: idfisioterapia,
            idzona: idzona,
            idfisioterapia2: fisioterapia,
            idzona2: zonadolor,
            ...restOfDto,
        });
        return await this.dolorfisioRepository.save(dolorfisio);
    }
    async findAll() {
        return await this.dolorfisioRepository.find({
            relations: ['idfisioterapia2', 'idzona2'],
        });
    }
    async findOne(iddolorfisio) {
        const dolorfisio = await this.dolorfisioRepository.findOne({
            where: { iddolorfisio: iddolorfisio },
            relations: ['idfisioterapia2', 'idzona2'],
        });
        if (!dolorfisio) {
            throw new common_1.NotFoundException(`Registro de Dolor Fisio con ID ${iddolorfisio} no encontrado.`);
        }
        return dolorfisio;
    }
    async update(iddolorfisio, updateDolorFisioDto) {
        const dolorfisio = await this.dolorfisioRepository.findOne({ where: { iddolorfisio: iddolorfisio } });
        if (!dolorfisio) {
            throw new common_1.NotFoundException(`Registro de Dolor Fisio con ID ${iddolorfisio} no encontrado.`);
        }
        const { idfisioterapia, idzona, ...restOfDto } = updateDolorFisioDto;
        if (idfisioterapia !== undefined) {
            const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
            if (!fisioterapia)
                throw new common_1.NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
            dolorfisio.idfisioterapia = idfisioterapia;
            dolorfisio.idfisioterapia2 = fisioterapia;
        }
        if (idzona !== undefined) {
            const zonadolor = await this.zonadolorService.findOne(idzona);
            if (!zonadolor)
                throw new common_1.NotFoundException(`Zona de Dolor con ID ${idzona} no encontrada.`);
            dolorfisio.idzona = idzona;
            dolorfisio.idzona2 = zonadolor;
        }
        Object.assign(dolorfisio, restOfDto);
        return await this.dolorfisioRepository.save(dolorfisio);
    }
    async remove(iddolorfisio) {
        const result = await this.dolorfisioRepository.delete(iddolorfisio);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Registro de Dolor Fisio con ID ${iddolorfisio} no encontrado.`);
        }
    }
    async deleteByFisioterapiaId(idfisioterapia) {
        await this.dolorfisioRepository.delete({ idfisioterapia: idfisioterapia });
    }
};
exports.DolorFisioService = DolorFisioService;
exports.DolorFisioService = DolorFisioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dolor_fisio_entity_1.Dolorfisio)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => fisioterapia_service_1.FisioterapiaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        fisioterapia_service_1.FisioterapiaService,
        zonadolor_service_1.ZonadolorService])
], DolorFisioService);
//# sourceMappingURL=dolor-fisio.service.js.map