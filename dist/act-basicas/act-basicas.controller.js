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
exports.ActBasicasController = void 0;
const common_1 = require("@nestjs/common");
const act_basicas_service_1 = require("./act-basicas.service");
const create_act_basica_dto_1 = require("./dto/create-act-basica.dto");
const update_act_basica_dto_1 = require("./dto/update-act-basica.dto");
let ActBasicasController = class ActBasicasController {
    actBasicasService;
    constructor(actBasicasService) {
        this.actBasicasService = actBasicasService;
    }
    create(createActBasicaDto) {
        return this.actBasicasService.create(createActBasicaDto);
    }
    findAll() {
        return this.actBasicasService.findAll();
    }
    findOne(id) {
        return this.actBasicasService.findOne(+id);
    }
    update(id, updateActBasicaDto) {
        return this.actBasicasService.update(+id, updateActBasicaDto);
    }
    remove(id) {
        return this.actBasicasService.remove(+id);
    }
};
exports.ActBasicasController = ActBasicasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_act_basica_dto_1.CreateActBasicasDto]),
    __metadata("design:returntype", void 0)
], ActBasicasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActBasicasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActBasicasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_act_basica_dto_1.UpdateActBasicaDto]),
    __metadata("design:returntype", void 0)
], ActBasicasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActBasicasController.prototype, "remove", null);
exports.ActBasicasController = ActBasicasController = __decorate([
    (0, common_1.Controller)('api/act-basicas'),
    __metadata("design:paramtypes", [act_basicas_service_1.ActBasicasService])
], ActBasicasController);
//# sourceMappingURL=act-basicas.controller.js.map