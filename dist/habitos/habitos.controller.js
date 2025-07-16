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
exports.HabitosController = void 0;
const common_1 = require("@nestjs/common");
const habitos_service_1 = require("./habitos.service");
const create_habito_dto_1 = require("./dto/create-habito.dto");
const update_habito_dto_1 = require("./dto/update-habito.dto");
let HabitosController = class HabitosController {
    habitosService;
    constructor(habitosService) {
        this.habitosService = habitosService;
    }
    create(createHabitoDto) {
        return this.habitosService.create(createHabitoDto);
    }
    findAll() {
        return this.habitosService.findAll();
    }
    findOne(id) {
        return this.habitosService.findOne(+id);
    }
    update(id, updateHabitoDto) {
        return this.habitosService.update(+id, updateHabitoDto);
    }
    remove(id) {
        return this.habitosService.remove(+id);
    }
};
exports.HabitosController = HabitosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_habito_dto_1.CreateHabitoDto]),
    __metadata("design:returntype", void 0)
], HabitosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HabitosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HabitosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_habito_dto_1.UpdateHabitoDto]),
    __metadata("design:returntype", void 0)
], HabitosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HabitosController.prototype, "remove", null);
exports.HabitosController = HabitosController = __decorate([
    (0, common_1.Controller)('api/habitos-nocivos'),
    __metadata("design:paramtypes", [habitos_service_1.HabitoService])
], HabitosController);
//# sourceMappingURL=habitos.controller.js.map