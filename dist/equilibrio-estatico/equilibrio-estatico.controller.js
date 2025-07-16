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
exports.EquilibrioEstaticoController = void 0;
const common_1 = require("@nestjs/common");
const equilibrio_estatico_service_1 = require("./equilibrio-estatico.service");
const create_equilibrio_estatico_dto_1 = require("./dto/create-equilibrio-estatico.dto");
const update_equilibrio_estatico_dto_1 = require("./dto/update-equilibrio-estatico.dto");
let EquilibrioEstaticoController = class EquilibrioEstaticoController {
    equilibrioEstaticoService;
    constructor(equilibrioEstaticoService) {
        this.equilibrioEstaticoService = equilibrioEstaticoService;
    }
    async create(createEquilibrioEstaticoDto) {
        return this.equilibrioEstaticoService.create(createEquilibrioEstaticoDto);
    }
    async findAll() {
        return this.equilibrioEstaticoService.findAll();
    }
    async findOne(idfisioterapia) {
        return this.equilibrioEstaticoService.findOne(+idfisioterapia);
    }
    async update(idfisioterapia, updateEquilibrioEstaticoDto) {
        return this.equilibrioEstaticoService.update(+idfisioterapia, updateEquilibrioEstaticoDto);
    }
    async remove(idfisioterapia) {
        return this.equilibrioEstaticoService.remove(+idfisioterapia);
    }
};
exports.EquilibrioEstaticoController = EquilibrioEstaticoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_equilibrio_estatico_dto_1.CreateEquilibrioEstaticoDto]),
    __metadata("design:returntype", Promise)
], EquilibrioEstaticoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EquilibrioEstaticoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquilibrioEstaticoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_equilibrio_estatico_dto_1.UpdateEquilibrioEstaticoDto]),
    __metadata("design:returntype", Promise)
], EquilibrioEstaticoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquilibrioEstaticoController.prototype, "remove", null);
exports.EquilibrioEstaticoController = EquilibrioEstaticoController = __decorate([
    (0, common_1.Controller)('/api/equilibrio-estatico'),
    __metadata("design:paramtypes", [equilibrio_estatico_service_1.EquilibrioEstaticoService])
], EquilibrioEstaticoController);
//# sourceMappingURL=equilibrio-estatico.controller.js.map