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
exports.GeneralController = void 0;
const common_1 = require("@nestjs/common");
const general_service_1 = require("./general.service");
const create_general_dto_1 = require("./dto/create-general.dto");
const update_general_dto_1 = require("./dto/update-general.dto");
let GeneralController = class GeneralController {
    generalService;
    constructor(generalService) {
        this.generalService = generalService;
    }
    create(createGeneralDto) {
        return this.generalService.create(createGeneralDto);
    }
    findAll() {
        return this.generalService.findAll();
    }
    findOne(id) {
        return this.generalService.findOne(+id);
    }
    update(id, updateGeneralDto) {
        return this.generalService.update(+id, updateGeneralDto);
    }
    remove(id) {
        return this.generalService.remove(+id);
    }
};
exports.GeneralController = GeneralController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_general_dto_1.CreateGeneralDto]),
    __metadata("design:returntype", void 0)
], GeneralController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GeneralController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GeneralController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_general_dto_1.UpdateGeneralDto]),
    __metadata("design:returntype", void 0)
], GeneralController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GeneralController.prototype, "remove", null);
exports.GeneralController = GeneralController = __decorate([
    (0, common_1.Controller)('api/general'),
    __metadata("design:paramtypes", [general_service_1.GeneralService])
], GeneralController);
//# sourceMappingURL=general.controller.js.map