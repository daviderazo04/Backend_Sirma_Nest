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
exports.FichaGeneralDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class FichaGeneralDto {
    idFichaPaciente;
    idDatosGenerales;
    idMedicina;
    idEnfermeria;
    idNutricion;
    idFisioterapia;
}
exports.FichaGeneralDto = FichaGeneralDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la ficha del paciente' }),
    __metadata("design:type", String)
], FichaGeneralDto.prototype, "idFichaPaciente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de datos generales', default: '' }),
    __metadata("design:type", String)
], FichaGeneralDto.prototype, "idDatosGenerales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de medicina', default: '' }),
    __metadata("design:type", String)
], FichaGeneralDto.prototype, "idMedicina", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de enfermería', default: '' }),
    __metadata("design:type", String)
], FichaGeneralDto.prototype, "idEnfermeria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de nutrición', default: '' }),
    __metadata("design:type", String)
], FichaGeneralDto.prototype, "idNutricion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de fisioterapia', default: '' }),
    __metadata("design:type", String)
], FichaGeneralDto.prototype, "idFisioterapia", void 0);
//# sourceMappingURL=ficha-general.dto.js.map