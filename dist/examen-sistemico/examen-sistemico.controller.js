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
exports.ExamenSistemicoController = void 0;
const common_1 = require("@nestjs/common");
const examen_sistemico_service_1 = require("./examen-sistemico.service");
const create_examen_sistemico_dto_1 = require("./dto/create-examen-sistemico.dto");
const update_examen_sistemico_dto_1 = require("./dto/update-examen-sistemico.dto");
let ExamenSistemicoController = class ExamenSistemicoController {
    examenSistemicoService;
    constructor(examenSistemicoService) {
        this.examenSistemicoService = examenSistemicoService;
    }
    create(createExamenSistemicoDto) {
        return this.examenSistemicoService.create(createExamenSistemicoDto);
    }
    findAll() {
        return this.examenSistemicoService.findAll();
    }
    findOne(id) {
        return this.examenSistemicoService.findOne(+id);
    }
    update(id, updateExamenSistemicoDto) {
        return this.examenSistemicoService.update(+id, updateExamenSistemicoDto);
    }
    remove(id) {
        return this.examenSistemicoService.remove(+id);
    }
};
exports.ExamenSistemicoController = ExamenSistemicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_examen_sistemico_dto_1.CreateExamenSistemicoDto]),
    __metadata("design:returntype", void 0)
], ExamenSistemicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamenSistemicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamenSistemicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_examen_sistemico_dto_1.UpdateExamenSistemicoDto]),
    __metadata("design:returntype", void 0)
], ExamenSistemicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamenSistemicoController.prototype, "remove", null);
exports.ExamenSistemicoController = ExamenSistemicoController = __decorate([
    (0, common_1.Controller)('api/examen-sistemico'),
    __metadata("design:paramtypes", [examen_sistemico_service_1.ExamenSistemicoService])
], ExamenSistemicoController);
//# sourceMappingURL=examen-sistemico.controller.js.map