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
exports.EnfermeriaController = void 0;
const common_1 = require("@nestjs/common");
const enfermeria_service_1 = require("./enfermeria.service");
const create_full_enfermeria_dto_1 = require("./dto/create-full-enfermeria.dto");
const update_full_enfermeria_dto_1 = require("./dto/update-full-enfermeria.dto");
const update_enfermeria_dto_1 = require("./dto/update-enfermeria.dto");
let EnfermeriaController = class EnfermeriaController {
    enfermeriaService;
    constructor(enfermeriaService) {
        this.enfermeriaService = enfermeriaService;
    }
    async create(createFullEnfermeriaDto) {
        return this.enfermeriaService.createFull(createFullEnfermeriaDto);
    }
    async findAll() {
        return await this.enfermeriaService.findAll();
    }
    findAllFull() {
        return this.enfermeriaService.findAllFull();
    }
    async findOne(id) {
        return this.enfermeriaService.findOneFull(+id);
    }
    async getEnfermeriaCompleta(idEnfermeria) {
        return await this.enfermeriaService.obtenerEnfermeriaCompleta(+idEnfermeria);
    }
    update(id, updateEnfermeriaDto) {
        return this.enfermeriaService.update(+id, updateEnfermeriaDto);
    }
    async patch(id, updateFullEnfermeriaDto) {
        return this.enfermeriaService.updateFull(+id, updateFullEnfermeriaDto);
    }
    remove(id) {
        return this.enfermeriaService.remove(+id);
    }
};
exports.EnfermeriaController = EnfermeriaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_full_enfermeria_dto_1.CreateFullEnfermeriaDto]),
    __metadata("design:returntype", Promise)
], EnfermeriaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnfermeriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/full'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnfermeriaController.prototype, "findAllFull", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EnfermeriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('completa/:idEnfermeria'),
    __param(0, (0, common_1.Param)('idEnfermeria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EnfermeriaController.prototype, "getEnfermeriaCompleta", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_enfermeria_dto_1.UpdateEnfermeriaDto]),
    __metadata("design:returntype", void 0)
], EnfermeriaController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_full_enfermeria_dto_1.UpdateFullEnfermeriaDto]),
    __metadata("design:returntype", Promise)
], EnfermeriaController.prototype, "patch", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnfermeriaController.prototype, "remove", null);
exports.EnfermeriaController = EnfermeriaController = __decorate([
    (0, common_1.Controller)('/api/enfermeria'),
    __metadata("design:paramtypes", [enfermeria_service_1.EnfermeriaService])
], EnfermeriaController);
//# sourceMappingURL=enfermeria.controller.js.map