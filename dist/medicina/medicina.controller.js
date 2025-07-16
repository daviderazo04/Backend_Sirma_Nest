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
exports.MedicinaController = void 0;
const common_1 = require("@nestjs/common");
const medicina_service_1 = require("./medicina.service");
const update_medicina_dto_1 = require("./dto/update-medicina.dto");
const create_full_medicina_dto_1 = require("./dto/create-full-medicina.dto");
const update_full_medicina_dto_1 = require("./dto/update-full-medicina.dto");
let MedicinaController = class MedicinaController {
    medicinaService;
    constructor(medicinaService) {
        this.medicinaService = medicinaService;
    }
    async create(createFullMedicinaDto) {
        return this.medicinaService.createFull(createFullMedicinaDto);
    }
    findAll() {
        return this.medicinaService.findAll();
    }
    findAllFull() {
        return this.medicinaService.findAllFull();
    }
    async findOne(id) {
        return this.medicinaService.findOneFull(+id);
    }
    update(id, updateMedicinaDto) {
        return this.medicinaService.update(+id, updateMedicinaDto);
    }
    async patch(id, updateFullMedicinaDto) {
        return this.medicinaService.updateFull(+id, updateFullMedicinaDto);
    }
    remove(id) {
        return this.medicinaService.remove(+id);
    }
};
exports.MedicinaController = MedicinaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_full_medicina_dto_1.CreateFullMedicinaDto]),
    __metadata("design:returntype", Promise)
], MedicinaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicinaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/full'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicinaController.prototype, "findAllFull", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicinaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medicina_dto_1.UpdateMedicinaDto]),
    __metadata("design:returntype", void 0)
], MedicinaController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_full_medicina_dto_1.UpdateFullMedicinaDto]),
    __metadata("design:returntype", Promise)
], MedicinaController.prototype, "patch", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicinaController.prototype, "remove", null);
exports.MedicinaController = MedicinaController = __decorate([
    (0, common_1.Controller)('/api/medicina'),
    __metadata("design:paramtypes", [medicina_service_1.MedicinaService])
], MedicinaController);
//# sourceMappingURL=medicina.controller.js.map