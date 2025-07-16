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
exports.CreateAntecedentesnutriDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateAntecedentesnutriDto {
    idnutricion;
    anDietabalanceada;
    anDentalescompletas;
    anDificultadmasticar;
    anEstrenimientofrecu;
    anDiarreafrecu;
    anAlergiaalimentaria;
    anDesayuno;
    anAlmuerzo;
    anCena;
    anSnacks;
    anPreferencias;
    anQuiencocina;
}
exports.CreateAntecedentesnutriDto = CreateAntecedentesnutriDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de Nutrición es obligatorio.' }),
    (0, class_validator_1.IsInt)({ message: 'El ID de Nutrición debe ser un número entero.' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateAntecedentesnutriDto.prototype, "idnutricion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'AN_DIETABALANCEADA debe ser un valor booleano (true/false).' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateAntecedentesnutriDto.prototype, "anDietabalanceada", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'AN_DENTALESCOMPLETAS debe ser un valor booleano (true/false).' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateAntecedentesnutriDto.prototype, "anDentalescompletas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'AN_DIFICULTADMASTICAR debe ser un valor booleano (true/false).' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateAntecedentesnutriDto.prototype, "anDificultadmasticar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'AN_ESTRENIMIENTOFRECU debe ser un valor booleano (true/false).' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateAntecedentesnutriDto.prototype, "anEstrenimientofrecu", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'AN_DIARREAFRECU debe ser un valor booleano (true/false).' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateAntecedentesnutriDto.prototype, "anDiarreafrecu", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'AN_ALERGIAALIMENTARIA debe ser un valor booleano (true/false).' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateAntecedentesnutriDto.prototype, "anAlergiaalimentaria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'AN_DESAYUNO debe ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(80, { message: 'AN_DESAYUNO no debe exceder los 80 caracteres.' }),
    __metadata("design:type", String)
], CreateAntecedentesnutriDto.prototype, "anDesayuno", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'AN_ALMUERZO debe ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(80, { message: 'AN_ALMUERZO no debe exceder los 80 caracteres.' }),
    __metadata("design:type", String)
], CreateAntecedentesnutriDto.prototype, "anAlmuerzo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'AN_CENA debe ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(80, { message: 'AN_CENA no debe exceder los 80 caracteres.' }),
    __metadata("design:type", String)
], CreateAntecedentesnutriDto.prototype, "anCena", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'AN_SNACKS debe ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(80, { message: 'AN_SNACKS no debe exceder los 80 caracteres.' }),
    __metadata("design:type", String)
], CreateAntecedentesnutriDto.prototype, "anSnacks", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'AN_PREFERENCIAS debe ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(80, { message: 'AN_PREFERENCIAS no debe exceder los 80 caracteres.' }),
    __metadata("design:type", String)
], CreateAntecedentesnutriDto.prototype, "anPreferencias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'AN_QUIENCOCINA debe ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(80, { message: 'AN_QUIENCOCINA no debe exceder los 80 caracteres.' }),
    __metadata("design:type", String)
], CreateAntecedentesnutriDto.prototype, "anQuiencocina", void 0);
//# sourceMappingURL=create-antecedentes-nutri.dto.js.map