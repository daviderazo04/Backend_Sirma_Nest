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
exports.SeguimientoSaludController = void 0;
const common_1 = require("@nestjs/common");
const seguimiento_salud_service_1 = require("./seguimiento-salud.service");
const create_seguimiento_salud_dto_1 = require("./dto/create-seguimiento-salud.dto");
const update_seguimiento_salud_dto_1 = require("./dto/update-seguimiento-salud.dto");
let SeguimientoSaludController = class SeguimientoSaludController {
    seguimientoSaludService;
    constructor(seguimientoSaludService) {
        this.seguimientoSaludService = seguimientoSaludService;
    }
    create(createSeguimientoSaludDto) {
        return this.seguimientoSaludService.create(createSeguimientoSaludDto);
    }
    findAll() {
        return this.seguimientoSaludService.findAll();
    }
    findOne(id) {
        return this.seguimientoSaludService.findOne(+id);
    }
    update(id, updateSeguimientoSaludDto) {
        return this.seguimientoSaludService.update(+id, updateSeguimientoSaludDto);
    }
    remove(id) {
        return this.seguimientoSaludService.remove(+id);
    }
};
exports.SeguimientoSaludController = SeguimientoSaludController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seguimiento_salud_dto_1.CreateSeguimientoSaludDto]),
    __metadata("design:returntype", void 0)
], SeguimientoSaludController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeguimientoSaludController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeguimientoSaludController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_seguimiento_salud_dto_1.UpdateSeguimientoSaludDto]),
    __metadata("design:returntype", void 0)
], SeguimientoSaludController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeguimientoSaludController.prototype, "remove", null);
exports.SeguimientoSaludController = SeguimientoSaludController = __decorate([
    (0, common_1.Controller)('seguimiento-salud'),
    __metadata("design:paramtypes", [seguimiento_salud_service_1.SeguimientoSaludService])
], SeguimientoSaludController);
//# sourceMappingURL=seguimiento-salud.controller.js.map