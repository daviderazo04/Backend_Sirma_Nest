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
exports.UpdateDatosGeneraleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_datos_generale_dto_1 = require("./create-datos-generale.dto");
const class_validator_1 = require("class-validator");
class UpdateDatosGeneraleDto extends (0, swagger_1.PartialType)(create_datos_generale_dto_1.CreateDatosGeneraleDto) {
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
exports.UpdateDatosGeneraleDto = UpdateDatosGeneraleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 6),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "idFicha", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgNombreencuestador", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,2' }),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgPasAcostado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,2' }),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgPadAcostado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,2' }),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgPasSentado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,2' }),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgPadSentado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgDiagnosticoha", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateDatosGeneraleDto.prototype, "dgPulsopormin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgDiagnosticopulso", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateDatosGeneraleDto.prototype, "dgFrecrespiratoria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgDiagnosticofr", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateDatosGeneraleDto.prototype, "dgSaturacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgDiagnosticosaturacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '0,1' }),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgTemperatura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateDatosGeneraleDto.prototype, "dgDiagnosticotemperatura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateDatosGeneraleDto.prototype, "dgFirmaconcentimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateDatosGeneraleDto.prototype, "dgFirmamedicina", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateDatosGeneraleDto.prototype, "dgFirmaenfermeria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateDatosGeneraleDto.prototype, "dgFirmanutricion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateDatosGeneraleDto.prototype, "dgFirmafisioterapia", void 0);
//# sourceMappingURL=update-datos-generale.dto.js.map