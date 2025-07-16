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
exports.CreateFichasGeneralCompletaDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateFichasGeneralCompletaDto {
    p_cedula;
    p_id_ficha_nueva;
    p_fecha_primer_contacto;
    p_estado_general;
    p_observaciones;
    p_nombre_encuestador;
    p_pas_acostado;
    p_pad_acostado;
    p_pas_sentado;
    p_pad_sentado;
    p_diagnostico_ha;
    p_pulso_por_min;
    p_diagnostico_pulso;
    p_frec_respiratoria;
    p_diagnostico_fr;
    p_saturacion;
    p_diagnostico_saturacion;
    p_temperatura;
    p_diagnostico_temperatura;
    p_firma_consentimiento;
    p_firma_medicina;
    p_firma_enfermeria;
    p_firma_nutricion;
    p_firma_fisioterapia;
}
exports.CreateFichasGeneralCompletaDto = CreateFichasGeneralCompletaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 10, { message: 'La cédula debe tener exactamente 10 caracteres.' }),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_cedula", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 6, { message: 'El ID de ficha debe tener entre 1 y 6 caracteres.' }),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_id_ficha_nueva", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_fecha_primer_contacto", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 13, { message: 'El estado general debe tener entre 1 y 13 caracteres.' }),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_estado_general", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_observaciones", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50, { message: 'El nombre del encuestador debe tener entre 1 y 50 caracteres.' }),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_nombre_encuestador", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(999.99),
    __metadata("design:type", Number)
], CreateFichasGeneralCompletaDto.prototype, "p_pas_acostado", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(999.99),
    __metadata("design:type", Number)
], CreateFichasGeneralCompletaDto.prototype, "p_pad_acostado", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(999.99),
    __metadata("design:type", Number)
], CreateFichasGeneralCompletaDto.prototype, "p_pas_sentado", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(999.99),
    __metadata("design:type", Number)
], CreateFichasGeneralCompletaDto.prototype, "p_pad_sentado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_diagnostico_ha", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(32767),
    __metadata("design:type", Number)
], CreateFichasGeneralCompletaDto.prototype, "p_pulso_por_min", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_diagnostico_pulso", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(32767),
    __metadata("design:type", Number)
], CreateFichasGeneralCompletaDto.prototype, "p_frec_respiratoria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_diagnostico_fr", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(32767),
    __metadata("design:type", Number)
], CreateFichasGeneralCompletaDto.prototype, "p_saturacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_diagnostico_saturacion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(99.9),
    __metadata("design:type", Number)
], CreateFichasGeneralCompletaDto.prototype, "p_temperatura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFichasGeneralCompletaDto.prototype, "p_diagnostico_temperatura", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateFichasGeneralCompletaDto.prototype, "p_firma_consentimiento", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateFichasGeneralCompletaDto.prototype, "p_firma_medicina", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateFichasGeneralCompletaDto.prototype, "p_firma_enfermeria", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateFichasGeneralCompletaDto.prototype, "p_firma_nutricion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateFichasGeneralCompletaDto.prototype, "p_firma_fisioterapia", void 0);
//# sourceMappingURL=create-fichas-general-completa.dto.js.map