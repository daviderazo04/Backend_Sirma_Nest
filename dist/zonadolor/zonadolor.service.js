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
exports.ZonadolorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const zonadolor_entity_1 = require("./entities/zonadolor.entity");
let ZonadolorService = class ZonadolorService {
    zonadolorRepository;
    constructor(zonadolorRepository) {
        this.zonadolorRepository = zonadolorRepository;
    }
    async create(createZonadolorDto) {
        const zonadolor = this.zonadolorRepository.create(createZonadolorDto);
        return await this.zonadolorRepository.save(zonadolor);
    }
    async findAll() {
        return await this.zonadolorRepository.find();
    }
    async findOne(id) {
        const zonadolor = await this.zonadolorRepository.findOne({
            where: { idzona: id },
        });
        if (!zonadolor) {
            throw new common_1.NotFoundException(`Zona de Dolor con ID ${id} no encontrada.`);
        }
        return zonadolor;
    }
    async update(id, updateZonadolorDto) {
        const zonadolor = await this.zonadolorRepository.findOne({ where: { idzona: id } });
        if (!zonadolor) {
            throw new common_1.NotFoundException(`Zona de Dolor con ID ${id} no encontrada.`);
        }
        Object.assign(zonadolor, updateZonadolorDto);
        return await this.zonadolorRepository.save(zonadolor);
    }
    async remove(id) {
        const result = await this.zonadolorRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Zona de Dolor con ID ${id} no encontrada.`);
        }
    }
};
exports.ZonadolorService = ZonadolorService;
exports.ZonadolorService = ZonadolorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(zonadolor_entity_1.Zonadolor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ZonadolorService);
//# sourceMappingURL=zonadolor.service.js.map