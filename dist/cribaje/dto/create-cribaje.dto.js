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
exports.CreateCribajeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCribajeDto {
    idnutricion;
    criPerdidaapetito;
    criPerdidapeso;
    criMovilidad;
    criEnfermedadaguda;
    criNeuropsico;
    criImc;
    criTotales;
}
exports.CreateCribajeDto = CreateCribajeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID de la nutrición asociada a este cribaje.',
        example: 1,
        type: Number,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCribajeDto.prototype, "idnutricion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicador de pérdida de apetito (0-2).',
        example: 1,
        nullable: true,
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(2),
    __metadata("design:type", Number)
], CreateCribajeDto.prototype, "criPerdidaapetito", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicador de pérdida de peso (0-3).',
        example: 2,
        nullable: true,
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(3),
    __metadata("design:type", Number)
], CreateCribajeDto.prototype, "criPerdidapeso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicador de movilidad (0-2).',
        example: 1,
        nullable: true,
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(2),
    __metadata("design:type", Number)
], CreateCribajeDto.prototype, "criMovilidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicador de enfermedad aguda o estrés psicológico (0-2).',
        example: 0,
        nullable: true,
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(2),
    __metadata("design:type", Number)
], CreateCribajeDto.prototype, "criEnfermedadaguda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicador de problemas neuropsicológicos (0-2).',
        example: 1,
        nullable: true,
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(2),
    __metadata("design:type", Number)
], CreateCribajeDto.prototype, "criNeuropsico", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicador de IMC (0-3).',
        example: 3,
        nullable: true,
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(3),
    __metadata("design:type", Number)
], CreateCribajeDto.prototype, "criImc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Puntuación total del cribaje.',
        example: 8,
        nullable: true,
        required: false,
        type: Number,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateCribajeDto.prototype, "criTotales", void 0);
//# sourceMappingURL=create-cribaje.dto.js.map