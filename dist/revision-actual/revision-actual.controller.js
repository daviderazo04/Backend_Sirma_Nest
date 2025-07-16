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
exports.RevisionActualController = void 0;
const common_1 = require("@nestjs/common");
const revision_actual_service_1 = require("./revision-actual.service");
const create_revision_actual_dto_1 = require("./dto/create-revision-actual.dto");
const update_revision_actual_dto_1 = require("./dto/update-revision-actual.dto");
let RevisionActualController = class RevisionActualController {
    revisionActualService;
    constructor(revisionActualService) {
        this.revisionActualService = revisionActualService;
    }
    create(createRevisionActualDto) {
        return this.revisionActualService.create(createRevisionActualDto);
    }
    findAll() {
        return this.revisionActualService.findAll();
    }
    findOne(id) {
        return this.revisionActualService.findOne(+id);
    }
    update(id, updateRevisionActualDto) {
        return this.revisionActualService.update(+id, updateRevisionActualDto);
    }
    remove(id) {
        return this.revisionActualService.remove(+id);
    }
};
exports.RevisionActualController = RevisionActualController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_revision_actual_dto_1.CreateRevisionActualDto]),
    __metadata("design:returntype", void 0)
], RevisionActualController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RevisionActualController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RevisionActualController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_revision_actual_dto_1.UpdateRevisionActualDto]),
    __metadata("design:returntype", void 0)
], RevisionActualController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RevisionActualController.prototype, "remove", null);
exports.RevisionActualController = RevisionActualController = __decorate([
    (0, common_1.Controller)('api/revision-actual'),
    __metadata("design:paramtypes", [revision_actual_service_1.RevisionActualService])
], RevisionActualController);
//# sourceMappingURL=revision-actual.controller.js.map