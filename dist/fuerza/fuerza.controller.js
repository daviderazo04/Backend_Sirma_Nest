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
exports.FuerzaController = void 0;
const common_1 = require("@nestjs/common");
const fuerza_service_1 = require("./fuerza.service");
const create_fuerza_dto_1 = require("./dto/create-fuerza.dto");
const update_fuerza_dto_1 = require("./dto/update-fuerza.dto");
let FuerzaController = class FuerzaController {
    fuerzaService;
    constructor(fuerzaService) {
        this.fuerzaService = fuerzaService;
    }
    async create(createFuerzaDto) {
        return this.fuerzaService.create(createFuerzaDto);
    }
    async findAll() {
        return this.fuerzaService.findAll();
    }
    async findOne(idfisioterapia) {
        return this.fuerzaService.findOne(+idfisioterapia);
    }
    async update(idfisioterapia, updateFuerzaDto) {
        return this.fuerzaService.update(+idfisioterapia, updateFuerzaDto);
    }
    async remove(idfisioterapia) {
        return this.fuerzaService.remove(+idfisioterapia);
    }
};
exports.FuerzaController = FuerzaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fuerza_dto_1.CreateFuerzaDto]),
    __metadata("design:returntype", Promise)
], FuerzaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FuerzaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuerzaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fuerza_dto_1.UpdateFuerzaDto]),
    __metadata("design:returntype", Promise)
], FuerzaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuerzaController.prototype, "remove", null);
exports.FuerzaController = FuerzaController = __decorate([
    (0, common_1.Controller)('/api/fuerza'),
    __metadata("design:paramtypes", [fuerza_service_1.FuerzaService])
], FuerzaController);
//# sourceMappingURL=fuerza.controller.js.map