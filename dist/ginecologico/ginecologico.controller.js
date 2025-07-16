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
exports.GinecologicoController = void 0;
const common_1 = require("@nestjs/common");
const ginecologico_service_1 = require("./ginecologico.service");
const create_ginecologico_dto_1 = require("./dto/create-ginecologico.dto");
const update_ginecologico_dto_1 = require("./dto/update-ginecologico.dto");
let GinecologicoController = class GinecologicoController {
    ginecologicoService;
    constructor(ginecologicoService) {
        this.ginecologicoService = ginecologicoService;
    }
    create(createGinecologicoDto) {
        return this.ginecologicoService.create(createGinecologicoDto);
    }
    findAll() {
        return this.ginecologicoService.findAll();
    }
    findOne(id) {
        return this.ginecologicoService.findOne(+id);
    }
    update(id, updateGinecologicoDto) {
        return this.ginecologicoService.update(+id, updateGinecologicoDto);
    }
    remove(id) {
        return this.ginecologicoService.remove(+id);
    }
};
exports.GinecologicoController = GinecologicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ginecologico_dto_1.CreateGinecologicoDto]),
    __metadata("design:returntype", void 0)
], GinecologicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GinecologicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GinecologicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ginecologico_dto_1.UpdateGinecologicoDto]),
    __metadata("design:returntype", void 0)
], GinecologicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GinecologicoController.prototype, "remove", null);
exports.GinecologicoController = GinecologicoController = __decorate([
    (0, common_1.Controller)('api/ginecologico'),
    __metadata("design:paramtypes", [ginecologico_service_1.GinecologicoService])
], GinecologicoController);
//# sourceMappingURL=ginecologico.controller.js.map