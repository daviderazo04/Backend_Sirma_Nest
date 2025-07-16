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
exports.CreateDatosGeneraleDto = void 0;
const class_validator_1 = require("class-validator");
class CreateDatosGeneraleDto {
    idFicha;
    dgNombreencuestador;
    dgPasAcostado;
    dgPadAcostado;
    dgPasSentado;
    dgPadSentado;
    dgDiagnosticoha;
    dgPulsopormin;
    dgDiagnosticopulso;
    dgFrecrespiratoria;
    dgDiagnosticofr;
    dgSaturacion;
    dgDiagnosticosaturacion;
    dgTemperatura;
    dgDiagnosticotemperatura;
    dgFirmaconcentimiento;
    dgFirmamedicina;
    dgFirmaenfermeria;
    dgFirmanutricion;
    dgFirmafisioterapia;
}
exports.CreateDatosGeneraleDto = CreateDatosGeneraleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 6),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "idFicha", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgNombreencuestador", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,2' }),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgPasAcostado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,2' }),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgPadAcostado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,2' }),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgPasSentado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,2' }),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgPadSentado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgDiagnosticoha", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateDatosGeneraleDto.prototype, "dgPulsopormin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgDiagnosticopulso", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateDatosGeneraleDto.prototype, "dgFrecrespiratoria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgDiagnosticofr", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateDatosGeneraleDto.prototype, "dgSaturacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgDiagnosticosaturacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,1' }),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgTemperatura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDatosGeneraleDto.prototype, "dgDiagnosticotemperatura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateDatosGeneraleDto.prototype, "dgFirmaconcentimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateDatosGeneraleDto.prototype, "dgFirmamedicina", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateDatosGeneraleDto.prototype, "dgFirmaenfermeria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateDatosGeneraleDto.prototype, "dgFirmanutricion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateDatosGeneraleDto.prototype, "dgFirmafisioterapia", void 0);
//# sourceMappingURL=create-datos-generale.dto.js.map