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
exports.ZonadolorController = void 0;
const common_1 = require("@nestjs/common");
const zonadolor_service_1 = require("./zonadolor.service");
const create_zonadolor_dto_1 = require("./dto/create-zonadolor.dto");
const update_zonadolor_dto_1 = require("./dto/update-zonadolor.dto");
let ZonadolorController = class ZonadolorController {
    zonadolorService;
    constructor(zonadolorService) {
        this.zonadolorService = zonadolorService;
    }
    async create(createZonadolorDto) {
        return this.zonadolorService.create(createZonadolorDto);
    }
    async findAll() {
        return this.zonadolorService.findAll();
    }
    async findOne(id) {
        return this.zonadolorService.findOne(+id);
    }
    async update(id, updateZonadolorDto) {
        return this.zonadolorService.update(+id, updateZonadolorDto);
    }
    async remove(id) {
        return this.zonadolorService.remove(+id);
    }
};
exports.ZonadolorController = ZonadolorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_zonadolor_dto_1.CreateZonadolorDto]),
    __metadata("design:returntype", Promise)
], ZonadolorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ZonadolorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZonadolorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_zonadolor_dto_1.UpdateZonadolorDto]),
    __metadata("design:returntype", Promise)
], ZonadolorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZonadolorController.prototype, "remove", null);
exports.ZonadolorController = ZonadolorController = __decorate([
    (0, common_1.Controller)('/api/zonadolor'),
    __metadata("design:paramtypes", [zonadolor_service_1.ZonadolorService])
], ZonadolorController);
//# sourceMappingURL=zonadolor.controller.js.map