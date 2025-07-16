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
exports.FichasGeneralCompletaController = void 0;
const common_1 = require("@nestjs/common");
const fichas_general_completa_service_1 = require("./fichas-general-completa.service");
const create_fichas_general_completa_dto_1 = require("./dto/create-fichas-general-completa.dto");
let FichasGeneralCompletaController = class FichasGeneralCompletaController {
    fichasGeneralCompletaService;
    constructor(fichasGeneralCompletaService) {
        this.fichasGeneralCompletaService = fichasGeneralCompletaService;
    }
    async crearFicha(createFichaDto) {
        return this.fichasGeneralCompletaService.crearFichaPersona(createFichaDto);
    }
};
exports.FichasGeneralCompletaController = FichasGeneralCompletaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fichas_general_completa_dto_1.CreateFichasGeneralCompletaDto]),
    __metadata("design:returntype", Promise)
], FichasGeneralCompletaController.prototype, "crearFicha", null);
exports.FichasGeneralCompletaController = FichasGeneralCompletaController = __decorate([
    (0, common_1.Controller)('fichas-general-completa'),
    __metadata("design:paramtypes", [fichas_general_completa_service_1.FichasGeneralCompletaService])
], FichasGeneralCompletaController);
//# sourceMappingURL=fichas-general-completa.controller.js.map