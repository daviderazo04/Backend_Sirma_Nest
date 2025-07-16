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
exports.FisioterapiaController = void 0;
const common_1 = require("@nestjs/common");
const fisioterapia_service_1 = require("./fisioterapia.service");
const create_fisioterapia_dto_1 = require("./dto/create-fisioterapia.dto");
const update_fisioterapia_dto_1 = require("./dto/update-fisioterapia.dto");
let FisioterapiaController = class FisioterapiaController {
    fisioterapiaService;
    constructor(fisioterapiaService) {
        this.fisioterapiaService = fisioterapiaService;
    }
    async create(createFisioterapiaDto) {
        return this.fisioterapiaService.create(createFisioterapiaDto);
    }
    findAll() {
        return this.fisioterapiaService.findAll();
    }
    findOne(id) {
        return this.fisioterapiaService.findOne(+id);
    }
    async getFisioterapiaCompleta(idFisioterapia) {
        return await this.fisioterapiaService.obtenerFisioterapiaCompleta(+idFisioterapia);
    }
    update(id, updateFisioterapiaDto) {
        return this.fisioterapiaService.update(+id, updateFisioterapiaDto);
    }
    remove(id) {
        return this.fisioterapiaService.remove(+id);
    }
};
exports.FisioterapiaController = FisioterapiaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fisioterapia_dto_1.CreateFisioterapiaDto]),
    __metadata("design:returntype", Promise)
], FisioterapiaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FisioterapiaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FisioterapiaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('completo/:idFisioterapia'),
    __param(0, (0, common_1.Param)('idFisioterapia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FisioterapiaController.prototype, "getFisioterapiaCompleta", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fisioterapia_dto_1.UpdateFisioterapiaDto]),
    __metadata("design:returntype", void 0)
], FisioterapiaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FisioterapiaController.prototype, "remove", null);
exports.FisioterapiaController = FisioterapiaController = __decorate([
    (0, common_1.Controller)('/api/fisioterapia'),
    __metadata("design:paramtypes", [fisioterapia_service_1.FisioterapiaService])
], FisioterapiaController);
//# sourceMappingURL=fisioterapia.controller.js.map