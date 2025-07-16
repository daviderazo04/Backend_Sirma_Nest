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
exports.RecursoSocialService = void 0;
const common_1 = require("@nestjs/common");
const recurso_social_entity_1 = require("./entities/recurso-social.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const enfermeria_service_1 = require("../enfermeria/enfermeria.service");
let RecursoSocialService = class RecursoSocialService {
    recursoSocialRepository;
    enfermeriaService;
    constructor(recursoSocialRepository, enfermeriaService) {
        this.recursoSocialRepository = recursoSocialRepository;
        this.enfermeriaService = enfermeriaService;
    }
    async create(createRecursoSocialDto) {
        if (!createRecursoSocialDto.idenfermeria) {
            throw new common_1.NotFoundException('idEnfermeria es requerido para crear un registro de Recurso Social.');
        }
        const enfermeria = await this.enfermeriaService.findOne(createRecursoSocialDto.idenfermeria);
        if (!enfermeria) {
            throw new common_1.NotFoundException(`Enfermería con ID ${createRecursoSocialDto.idenfermeria} no encontrada.`);
        }
        const recursoSocial = this.recursoSocialRepository.create({
            rsVivecon: createRecursoSocialDto.rsViveCon,
            rsContactosocial: createRecursoSocialDto.rsContactoSocial,
            rsApoyored: createRecursoSocialDto.rsApoyoRedes,
            rsTotal: createRecursoSocialDto.rsTotal,
            idenfermeria2: enfermeria,
        });
        return await this.recursoSocialRepository.save(recursoSocial);
    }
    async findAll() {
        return this.recursoSocialRepository.find({
            relations: ['idenfermeria2'],
        });
    }
    async findOne(id) {
        const recursoSocial = await this.recursoSocialRepository.findOne({
            where: { idenfermeria: id },
            relations: ['idenfermeria2'],
        });
        if (!recursoSocial) {
            throw new common_1.NotFoundException(`Recurso Social con ID ${id} no encontrado.`);
        }
        return recursoSocial;
    }
    async update(id, updateRecursoSocialDto) {
        const recursoSocial = await this.recursoSocialRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!recursoSocial) {
            throw new common_1.NotFoundException(`Recurso Social con ID ${id} no encontrado.`);
        }
        const updateData = {};
        for (const [key, value] of Object.entries(updateRecursoSocialDto)) {
            if (value !== undefined) {
                switch (key) {
                    case 'rsViveCon':
                        updateData.rsVivecon =
                            typeof value === 'string' ? value : String(value);
                        break;
                    case 'rsContactoSocial':
                        updateData.rsContactosocial =
                            typeof value === 'string' ? value : String(value);
                        break;
                    case 'rsApoyoRedes':
                        updateData.rsApoyored =
                            typeof value === 'string' ? value : String(value);
                        break;
                    case 'rsTotal':
                        updateData.rsTotal =
                            typeof value === 'number' ? value : Number(value);
                        break;
                }
            }
        }
        Object.assign(recursoSocial, updateData);
        return await this.recursoSocialRepository.save(recursoSocial);
    }
    async remove(id) {
        const recursoSocial = await this.recursoSocialRepository.findOne({
            where: { idenfermeria: id },
        });
        if (!recursoSocial) {
            throw new common_1.NotFoundException(`Recurso Social con ID ${id} no encontrado.`);
        }
        await this.recursoSocialRepository.delete({ idenfermeria: id });
        return {
            message: `Recurso Social con ID ${id} eliminado exitosamente.`,
        };
    }
};
exports.RecursoSocialService = RecursoSocialService;
exports.RecursoSocialService = RecursoSocialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recurso_social_entity_1.Recursosocial)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => enfermeria_service_1.EnfermeriaService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enfermeria_service_1.EnfermeriaService])
], RecursoSocialService);
//# sourceMappingURL=recurso-social.service.js.map