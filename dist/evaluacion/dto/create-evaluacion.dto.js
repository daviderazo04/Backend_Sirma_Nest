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
exports.CreateEvaluacionDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateEvaluacionDto {
    idnutricion;
    evaVivedomicilio;
    evaMastresmedicinas;
    evaUlceralesioncutanea;
    evaComidacompleta;
    evaConsumepaciente;
    evaFrutaverdura;
    evaVasosagua;
    evaFormaalimento;
    evaBiennutrido;
    evaEstadosalud;
    evaCircunbraquial;
    evaCircunpantorrilla;
    evaTotal;
}
exports.CreateEvaluacionDto = CreateEvaluacionDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de Nutrición es obligatorio.' }),
    (0, class_validator_1.IsInt)({ message: 'El ID de Nutrición debe ser un número entero.' }),
    (0, class_validator_1.Min)(1, { message: 'El ID de Nutrición debe ser un número positivo.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "idnutricion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_VIVEDOMICILIO debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_VIVEDOMICILIO debe ser 0 o 1.' }),
    (0, class_validator_1.Max)(1, { message: 'EVA_VIVEDOMICILIO debe ser 0 o 1.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaVivedomicilio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_MASTRESMEDICINAS debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_MASTRESMEDICINAS debe ser 0 o 1.' }),
    (0, class_validator_1.Max)(1, { message: 'EVA_MASTRESMEDICINAS debe ser 0 o 1.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaMastresmedicinas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_ULCERALESIONCUTANEA debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_ULCERALESIONCUTANEA debe ser 0 o 1.' }),
    (0, class_validator_1.Max)(1, { message: 'EVA_ULCERALESIONCUTANEA debe ser 0 o 1.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaUlceralesioncutanea", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_COMIDACOMPLETA debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_COMIDACOMPLETA debe ser 0 o 1.' }),
    (0, class_validator_1.Max)(1, { message: 'EVA_COMIDACOMPLETA debe ser 0 o 1.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaComidacompleta", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'EVA_CONSUMEPACIENTE debe ser una cadena de texto.' }),
    __metadata("design:type", String)
], CreateEvaluacionDto.prototype, "evaConsumepaciente", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_FRUTAVERDURA debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_FRUTAVERDURA debe ser 0 o 1.' }),
    (0, class_validator_1.Max)(1, { message: 'EVA_FRUTAVERDURA debe ser 0 o 1.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaFrutaverdura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'EVA_VASOSAGUA debe ser una cadena de texto.' }),
    __metadata("design:type", String)
], CreateEvaluacionDto.prototype, "evaVasosagua", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_FORMAALIMENTO debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_FORMAALIMENTO debe ser 0 o 1.' }),
    (0, class_validator_1.Max)(1, { message: 'EVA_FORMAALIMENTO debe ser 0 o 1.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaFormaalimento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_BIENNUTRIDO debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_BIENNUTRIDO debe ser 0 o 1.' }),
    (0, class_validator_1.Max)(1, { message: 'EVA_BIENNUTRIDO debe ser 0 o 1.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaBiennutrido", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'EVA_ESTADOSALUD debe ser una cadena de texto.' }),
    __metadata("design:type", String)
], CreateEvaluacionDto.prototype, "evaEstadosalud", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'EVA_CIRCUNBRAQUIAL debe ser una cadena de texto.' }),
    __metadata("design:type", String)
], CreateEvaluacionDto.prototype, "evaCircunbraquial", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_CIRCUNPANTORRILLA debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_CIRCUNPANTORRILLA debe ser 0 o 1.' }),
    (0, class_validator_1.Max)(1, { message: 'EVA_CIRCUNPANTORRILLA debe ser 0 o 1.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaCircunpantorrilla", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'EVA_TOTAL debe ser un número entero.' }),
    (0, class_validator_1.Min)(0, { message: 'EVA_TOTAL debe ser un número positivo.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateEvaluacionDto.prototype, "evaTotal", void 0);
//# sourceMappingURL=create-evaluacion.dto.js.map