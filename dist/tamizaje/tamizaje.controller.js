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
exports.TamizajeController = void 0;
const common_1 = require("@nestjs/common");
const tamizaje_service_1 = require("./tamizaje.service");
const create_tamizaje_dto_1 = require("./dto/create-tamizaje.dto");
const update_tamizaje_dto_1 = require("./dto/update-tamizaje.dto");
let TamizajeController = class TamizajeController {
    tamizajeService;
    constructor(tamizajeService) {
        this.tamizajeService = tamizajeService;
    }
    create(createTamizajeDto) {
        return this.tamizajeService.create(createTamizajeDto);
    }
    findAll() {
        return this.tamizajeService.findAll();
    }
    findOne(id) {
        return this.tamizajeService.findOne(+id);
    }
    update(id, updateTamizajeDto) {
        return this.tamizajeService.update(+id, updateTamizajeDto);
    }
    remove(id) {
        return this.tamizajeService.remove(+id);
    }
};
exports.TamizajeController = TamizajeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tamizaje_dto_1.CreateTamizajeDto]),
    __metadata("design:returntype", void 0)
], TamizajeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TamizajeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TamizajeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tamizaje_dto_1.UpdateTamizajeDto]),
    __metadata("design:returntype", void 0)
], TamizajeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TamizajeController.prototype, "remove", null);
exports.TamizajeController = TamizajeController = __decorate([
    (0, common_1.Controller)('api/tamizaje'),
    __metadata("design:paramtypes", [tamizaje_service_1.TamizajeService])
], TamizajeController);
//# sourceMappingURL=tamizaje.controller.js.map