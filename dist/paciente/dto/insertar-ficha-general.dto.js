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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertarFichaGeneralDTO = void 0;
const class_validator_1 = require("class-validator");
class InsertarFichaGeneralDTO {
    p_IDFICHA;
    p_FECHAPRIMERCONTACTO;
    p_ESTADOGENERAL;
    p_OBSERVACIONES;
    p_IDPERSONA;
    p_NOMBREENCUESTADOR;
    p_PAS_ACOSTADO;
    p_PAD_ACOSTADO;
    p_PAS_SENTADO;
    p_PAD_SENTADO;
    p_DIAGNOSTICOHA;
    p_PULSOPORMIN;
    p_DIAGNOSTICOPULSO;
    p_FRECRESPIRATORIA;
    p_DIAGNOSTICOFR;
    p_SATURACION;
    p_DIAGNOSTICOSATURACION;
    p_TEMPERATURA;
    p_DIAGNOSTICOTEMPERATURA;
}
exports.InsertarFichaGeneralDTO = InsertarFichaGeneralDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 6),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_IDFICHA", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_FECHAPRIMERCONTACTO", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 13),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_ESTADOGENERAL", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_OBSERVACIONES", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_IDPERSONA", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_NOMBREENCUESTADOR", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_PAS_ACOSTADO", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_PAD_ACOSTADO", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_PAS_SENTADO", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_PAD_SENTADO", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_DIAGNOSTICOHA", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_PULSOPORMIN", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_DIAGNOSTICOPULSO", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_FRECRESPIRATORIA", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_DIAGNOSTICOFR", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_SATURACION", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_DIAGNOSTICOSATURACION", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InsertarFichaGeneralDTO.prototype, "p_TEMPERATURA", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InsertarFichaGeneralDTO.prototype, "p_DIAGNOSTICOTEMPERATURA", void 0);
//# sourceMappingURL=insertar-ficha-general.dto.js.map