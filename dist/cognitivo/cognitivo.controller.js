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
exports.CognitivoController = void 0;
const common_1 = require("@nestjs/common");
const cognitivo_service_1 = require("./cognitivo.service");
const create_cognitivo_dto_1 = require("./dto/create-cognitivo.dto");
const update_cognitivo_dto_1 = require("./dto/update-cognitivo.dto");
let CognitivoController = class CognitivoController {
    cognitivoService;
    constructor(cognitivoService) {
        this.cognitivoService = cognitivoService;
    }
    create(createCognitivoDto) {
        return this.cognitivoService.create(createCognitivoDto);
    }
    findAll() {
        return this.cognitivoService.findAll();
    }
    findOne(id) {
        return this.cognitivoService.findOne(id);
    }
    update(id, updateCognitivoDto) {
        return this.cognitivoService.update(id, updateCognitivoDto);
    }
    remove(id) {
        return this.cognitivoService.remove(id);
    }
};
exports.CognitivoController = CognitivoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cognitivo_dto_1.CreateCognitivoDto]),
    __metadata("design:returntype", void 0)
], CognitivoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CognitivoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CognitivoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cognitivo_dto_1.UpdateCognitivoDto]),
    __metadata("design:returntype", void 0)
], CognitivoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CognitivoController.prototype, "remove", null);
exports.CognitivoController = CognitivoController = __decorate([
    (0, common_1.Controller)('api/cognitivo'),
    __metadata("design:paramtypes", [cognitivo_service_1.CognitivoService])
], CognitivoController);
//# sourceMappingURL=cognitivo.controller.js.map