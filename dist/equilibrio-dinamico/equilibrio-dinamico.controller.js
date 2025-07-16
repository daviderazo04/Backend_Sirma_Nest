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
exports.EquilibrioDinamicoController = void 0;
const common_1 = require("@nestjs/common");
const equilibrio_dinamico_service_1 = require("./equilibrio-dinamico.service");
const create_equilibrio_dinamico_dto_1 = require("./dto/create-equilibrio-dinamico.dto");
const update_equilibrio_dinamico_dto_1 = require("./dto/update-equilibrio-dinamico.dto");
let EquilibrioDinamicoController = class EquilibrioDinamicoController {
    equilibrioDinamicoService;
    constructor(equilibrioDinamicoService) {
        this.equilibrioDinamicoService = equilibrioDinamicoService;
    }
    async create(createEquilibrioDinamicoDto) {
        return this.equilibrioDinamicoService.create(createEquilibrioDinamicoDto);
    }
    async findAll() {
        return this.equilibrioDinamicoService.findAll();
    }
    async findOne(idfisioterapia) {
        return this.equilibrioDinamicoService.findOne(+idfisioterapia);
    }
    async update(idfisioterapia, updateEquilibrioDinamicoDto) {
        return this.equilibrioDinamicoService.update(+idfisioterapia, updateEquilibrioDinamicoDto);
    }
    async remove(idfisioterapia) {
        return this.equilibrioDinamicoService.remove(+idfisioterapia);
    }
};
exports.EquilibrioDinamicoController = EquilibrioDinamicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_equilibrio_dinamico_dto_1.CreateEquilibrioDinamicoDto]),
    __metadata("design:returntype", Promise)
], EquilibrioDinamicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EquilibrioDinamicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquilibrioDinamicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_equilibrio_dinamico_dto_1.UpdateEquilibrioDinamicoDto]),
    __metadata("design:returntype", Promise)
], EquilibrioDinamicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':idfisioterapia'),
    __param(0, (0, common_1.Param)('idfisioterapia')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EquilibrioDinamicoController.prototype, "remove", null);
exports.EquilibrioDinamicoController = EquilibrioDinamicoController = __decorate([
    (0, common_1.Controller)('/api/equilibrio-dinamico'),
    __metadata("design:paramtypes", [equilibrio_dinamico_service_1.EquilibrioDinamicoService])
], EquilibrioDinamicoController);
//# sourceMappingURL=equilibrio-dinamico.controller.js.map