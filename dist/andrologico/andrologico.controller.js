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
exports.AndrologicoController = void 0;
const common_1 = require("@nestjs/common");
const andrologico_service_1 = require("./andrologico.service");
const create_andrologico_dto_1 = require("./dto/create-andrologico.dto");
const update_andrologico_dto_1 = require("./dto/update-andrologico.dto");
let AndrologicoController = class AndrologicoController {
    andrologicoService;
    constructor(andrologicoService) {
        this.andrologicoService = andrologicoService;
    }
    create(createAndrologicoDto) {
        return this.andrologicoService.create(createAndrologicoDto);
    }
    findAll() {
        return this.andrologicoService.findAll();
    }
    findOne(id) {
        return this.andrologicoService.findOne(+id);
    }
    update(id, updateAndrologicoDto) {
        return this.andrologicoService.update(+id, updateAndrologicoDto);
    }
    remove(id) {
        return this.andrologicoService.remove(+id);
    }
};
exports.AndrologicoController = AndrologicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_andrologico_dto_1.CreateAndrologicoDto]),
    __metadata("design:returntype", void 0)
], AndrologicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AndrologicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AndrologicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_andrologico_dto_1.UpdateAndrologicoDto]),
    __metadata("design:returntype", void 0)
], AndrologicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AndrologicoController.prototype, "remove", null);
exports.AndrologicoController = AndrologicoController = __decorate([
    (0, common_1.Controller)('api/andrologico'),
    __metadata("design:paramtypes", [andrologico_service_1.AndrologicoService])
], AndrologicoController);
//# sourceMappingURL=andrologico.controller.js.map