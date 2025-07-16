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
exports.PacienteController = void 0;
const common_1 = require("@nestjs/common");
const paciente_service_1 = require("./paciente.service");
const create_paciente_dto_1 = require("./dto/create-paciente.dto");
const update_paciente_dto_1 = require("./dto/update-paciente.dto");
const insertar_ficha_general_dto_1 = require("./dto/insertar-ficha-general.dto");
let PacienteController = class PacienteController {
    pacienteService;
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    async create(createPacienteDto) {
        return await this.pacienteService.create(createPacienteDto);
    }
    async findAll() {
        return await this.pacienteService.findAll();
    }
    async getFichasGenerales() {
        return await this.pacienteService.obtenerFichasGenerales();
    }
    async findOne(idficha) {
        return await this.pacienteService.findOne(idficha);
    }
    async getFichasGeneralesPorCedula(cedula) {
        return await this.pacienteService.obtenerFichasPorCedula(cedula);
    }
    async getFichaByCedula(cedula) {
        return await this.pacienteService.getPacienteByIdficha(cedula);
    }
    async update(idficha, updatePacienteDto) {
        return await this.pacienteService.update(idficha, updatePacienteDto);
    }
    async remove(idficha) {
        await this.pacienteService.remove(idficha);
    }
    async insertarFichaGeneral(datos) {
        return await this.pacienteService.insertarFichaGeneral(datos);
    }
};
exports.PacienteController = PacienteController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_dto_1.CreatePacienteDto]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('fichas-generales'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getFichasGenerales", null);
__decorate([
    (0, common_1.Get)(':idficha'),
    __param(0, (0, common_1.Param)('idficha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('fichas-generales/cedula/:cedula'),
    __param(0, (0, common_1.Param)('cedula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getFichasGeneralesPorCedula", null);
__decorate([
    (0, common_1.Get)('ficha/cedula/:cedula'),
    __param(0, (0, common_1.Param)('cedula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getFichaByCedula", null);
__decorate([
    (0, common_1.Patch)(':idficha'),
    __param(0, (0, common_1.Param)('idficha')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paciente_dto_1.UpdatePacienteDto]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':idficha'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('idficha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('insertar-ficha-general'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insertar_ficha_general_dto_1.InsertarFichaGeneralDTO]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "insertarFichaGeneral", null);
exports.PacienteController = PacienteController = __decorate([
    (0, common_1.Controller)('api/pacientes'),
    __metadata("design:paramtypes", [paciente_service_1.PacienteService])
], PacienteController);
//# sourceMappingURL=paciente.controller.js.map