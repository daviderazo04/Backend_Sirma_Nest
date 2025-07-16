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
exports.DepresionController = void 0;
const common_1 = require("@nestjs/common");
const depresion_service_1 = require("./depresion.service");
const create_depresion_dto_1 = require("./dto/create-depresion.dto");
const update_depresion_dto_1 = require("./dto/update-depresion.dto");
let DepresionController = class DepresionController {
    depresionService;
    constructor(depresionService) {
        this.depresionService = depresionService;
    }
    create(createDepresionDto) {
        return this.depresionService.create(createDepresionDto);
    }
    findAll() {
        return this.depresionService.findAll();
    }
    findOne(id) {
        return this.depresionService.findOne(id);
    }
    update(id, updateDepresionDto) {
        return this.depresionService.update(id, updateDepresionDto);
    }
    remove(id) {
        return this.depresionService.remove(id);
    }
};
exports.DepresionController = DepresionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_depresion_dto_1.CreateDepresionDto]),
    __metadata("design:returntype", void 0)
], DepresionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepresionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepresionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_depresion_dto_1.UpdateDepresionDto]),
    __metadata("design:returntype", void 0)
], DepresionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepresionController.prototype, "remove", null);
exports.DepresionController = DepresionController = __decorate([
    (0, common_1.Controller)('api/depresion'),
    __metadata("design:paramtypes", [depresion_service_1.DepresionService])
], DepresionController);
//# sourceMappingURL=depresion.controller.js.map