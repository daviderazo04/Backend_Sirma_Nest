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
exports.PatologicoController = void 0;
const common_1 = require("@nestjs/common");
const patologico_service_1 = require("./patologico.service");
const create_patologico_dto_1 = require("./dto/create-patologico.dto");
const update_patologico_dto_1 = require("./dto/update-patologico.dto");
let PatologicoController = class PatologicoController {
    patologicoService;
    constructor(patologicoService) {
        this.patologicoService = patologicoService;
    }
    create(createPatologicoDto) {
        return this.patologicoService.create(createPatologicoDto);
    }
    findAll() {
        return this.patologicoService.findAll();
    }
    findOne(id) {
        return this.patologicoService.findOne(+id);
    }
    update(id, updatePatologicoDto) {
        return this.patologicoService.update(+id, updatePatologicoDto);
    }
    remove(id) {
        return this.patologicoService.remove(+id);
    }
};
exports.PatologicoController = PatologicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patologico_dto_1.CreatePatologicoDto]),
    __metadata("design:returntype", void 0)
], PatologicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatologicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatologicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_patologico_dto_1.UpdatePatologicoDto]),
    __metadata("design:returntype", void 0)
], PatologicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatologicoController.prototype, "remove", null);
exports.PatologicoController = PatologicoController = __decorate([
    (0, common_1.Controller)('api/patologico'),
    __metadata("design:paramtypes", [patologico_service_1.PatologicoService])
], PatologicoController);
//# sourceMappingURL=patologico.controller.js.map