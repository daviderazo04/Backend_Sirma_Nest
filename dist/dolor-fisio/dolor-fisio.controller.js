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
exports.DolorFisioController = void 0;
const common_1 = require("@nestjs/common");
const dolor_fisio_service_1 = require("./dolor-fisio.service");
const create_dolor_fisio_dto_1 = require("./dto/create-dolor-fisio.dto");
const update_dolor_fisio_dto_1 = require("./dto/update-dolor-fisio.dto");
let DolorFisioController = class DolorFisioController {
    dolorFisioService;
    constructor(dolorFisioService) {
        this.dolorFisioService = dolorFisioService;
    }
    async create(createDolorFisioDto) {
        return this.dolorFisioService.create(createDolorFisioDto);
    }
    async findAll() {
        return this.dolorFisioService.findAll();
    }
    async findOne(id) {
        return this.dolorFisioService.findOne(+id);
    }
    async update(id, updateDolorFisioDto) {
        return this.dolorFisioService.update(+id, updateDolorFisioDto);
    }
    async remove(id) {
        return this.dolorFisioService.remove(+id);
    }
};
exports.DolorFisioController = DolorFisioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dolor_fisio_dto_1.CreateDolorFisioDto]),
    __metadata("design:returntype", Promise)
], DolorFisioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DolorFisioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DolorFisioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dolor_fisio_dto_1.UpdateDolorFisioDto]),
    __metadata("design:returntype", Promise)
], DolorFisioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DolorFisioController.prototype, "remove", null);
exports.DolorFisioController = DolorFisioController = __decorate([
    (0, common_1.Controller)('/api/dolor-fisio'),
    __metadata("design:paramtypes", [dolor_fisio_service_1.DolorFisioService])
], DolorFisioController);
//# sourceMappingURL=dolor-fisio.controller.js.map