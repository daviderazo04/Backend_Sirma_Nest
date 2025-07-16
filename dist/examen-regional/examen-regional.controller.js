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
exports.ExamenRegionalController = void 0;
const common_1 = require("@nestjs/common");
const examen_regional_service_1 = require("./examen-regional.service");
const create_examen_regional_dto_1 = require("./dto/create-examen-regional.dto");
const update_examen_regional_dto_1 = require("./dto/update-examen-regional.dto");
let ExamenRegionalController = class ExamenRegionalController {
    examenRegionalService;
    constructor(examenRegionalService) {
        this.examenRegionalService = examenRegionalService;
    }
    create(createExamenRegionalDto) {
        return this.examenRegionalService.create(createExamenRegionalDto);
    }
    findAll() {
        return this.examenRegionalService.findAll();
    }
    findOne(id) {
        return this.examenRegionalService.findOne(+id);
    }
    update(id, updateExamenRegionalDto) {
        return this.examenRegionalService.update(+id, updateExamenRegionalDto);
    }
    remove(id) {
        return this.examenRegionalService.remove(+id);
    }
};
exports.ExamenRegionalController = ExamenRegionalController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_examen_regional_dto_1.CreateExamenRegionalDto]),
    __metadata("design:returntype", void 0)
], ExamenRegionalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamenRegionalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamenRegionalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_examen_regional_dto_1.UpdateExamenRegionalDto]),
    __metadata("design:returntype", void 0)
], ExamenRegionalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamenRegionalController.prototype, "remove", null);
exports.ExamenRegionalController = ExamenRegionalController = __decorate([
    (0, common_1.Controller)('api/examen-regional'),
    __metadata("design:paramtypes", [examen_regional_service_1.ExamenRegionalService])
], ExamenRegionalController);
//# sourceMappingURL=examen-regional.controller.js.map