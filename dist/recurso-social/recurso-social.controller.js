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
exports.RecursoSocialController = void 0;
const common_1 = require("@nestjs/common");
const recurso_social_service_1 = require("./recurso-social.service");
const create_recurso_social_dto_1 = require("./dto/create-recurso-social.dto");
const update_recurso_social_dto_1 = require("./dto/update-recurso-social.dto");
let RecursoSocialController = class RecursoSocialController {
    recursoSocialService;
    constructor(recursoSocialService) {
        this.recursoSocialService = recursoSocialService;
    }
    create(createRecursoSocialDto) {
        return this.recursoSocialService.create(createRecursoSocialDto);
    }
    findAll() {
        return this.recursoSocialService.findAll();
    }
    findOne(id) {
        return this.recursoSocialService.findOne(id);
    }
    update(id, updateRecursoSocialDto) {
        return this.recursoSocialService.update(id, updateRecursoSocialDto);
    }
    remove(id) {
        return this.recursoSocialService.remove(id);
    }
};
exports.RecursoSocialController = RecursoSocialController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recurso_social_dto_1.CreateRecursoSocialDto]),
    __metadata("design:returntype", void 0)
], RecursoSocialController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecursoSocialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecursoSocialController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_recurso_social_dto_1.UpdateRecursoSocialDto]),
    __metadata("design:returntype", void 0)
], RecursoSocialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecursoSocialController.prototype, "remove", null);
exports.RecursoSocialController = RecursoSocialController = __decorate([
    (0, common_1.Controller)('api/recurso-social'),
    __metadata("design:paramtypes", [recurso_social_service_1.RecursoSocialService])
], RecursoSocialController);
//# sourceMappingURL=recurso-social.controller.js.map