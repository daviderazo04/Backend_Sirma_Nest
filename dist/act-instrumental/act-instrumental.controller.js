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
exports.ActInstrumentalController = void 0;
const common_1 = require("@nestjs/common");
const act_instrumental_service_1 = require("./act-instrumental.service");
const create_act_instrumental_dto_1 = require("./dto/create-act-instrumental.dto");
const update_act_instrumental_dto_1 = require("./dto/update-act-instrumental.dto");
let ActInstrumentalController = class ActInstrumentalController {
    actInstrumentalService;
    constructor(actInstrumentalService) {
        this.actInstrumentalService = actInstrumentalService;
    }
    create(dto) {
        return this.actInstrumentalService.create(dto);
    }
    findAll() {
        return this.actInstrumentalService.findAll();
    }
    findOne(id) {
        return this.actInstrumentalService.findOne(id);
    }
    update(id, dto) {
        return this.actInstrumentalService.update(id, dto);
    }
    remove(id) {
        return this.actInstrumentalService.remove(id);
    }
};
exports.ActInstrumentalController = ActInstrumentalController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_act_instrumental_dto_1.CreateActInstrumentalDto]),
    __metadata("design:returntype", void 0)
], ActInstrumentalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActInstrumentalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActInstrumentalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_act_instrumental_dto_1.UpdateActInstrumentalDto]),
    __metadata("design:returntype", void 0)
], ActInstrumentalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActInstrumentalController.prototype, "remove", null);
exports.ActInstrumentalController = ActInstrumentalController = __decorate([
    (0, common_1.Controller)('api/actinstrumental'),
    __metadata("design:paramtypes", [act_instrumental_service_1.ActInstrumentalService])
], ActInstrumentalController);
//# sourceMappingURL=act-instrumental.controller.js.map