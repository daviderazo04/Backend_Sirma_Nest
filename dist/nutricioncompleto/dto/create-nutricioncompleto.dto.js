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
exports.CreateNutricionCompletoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateNutricionCompletoDto {
    idFicha;
    nombreEncuestador;
    evalGlobal;
    estadoNutricional;
    perdidaApetito;
    perdidaPeso;
    movilidad;
    enfermedadAguda;
    neuropsico;
    imc;
    totales;
    viveDomicilio;
    masTresMedicinas;
    ulceraLesionCutanea;
    comidaCompleta;
    consumePaciente;
    frutaVerdura;
    vasosAgua;
    formaAlimento;
    bienNutrido;
    estadoSalud;
    circunBraquial;
    circunPantorrilla;
    evaTotal;
    dietaBalanceada;
    dentalesCompletas;
    dificultadMasticar;
    estrenimientoFrecu;
    diarreaFrecu;
    alergiaAlimentaria;
    desayuno;
    almuerzo;
    cena;
    snacks;
    preferencias;
    quienCocina;
    imcDA;
    cintura;
    cadera;
    pantorrilla;
    brazo;
    talla;
    peso;
}
exports.CreateNutricionCompletoDto = CreateNutricionCompletoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNutricionCompletoDto.prototype, "idFicha", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNutricionCompletoDto.prototype, "nombreEncuestador", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "evalGlobal", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "estadoNutricional", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "perdidaApetito", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "perdidaPeso", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "movilidad", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "enfermedadAguda", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "neuropsico", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "imc", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "totales", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "viveDomicilio", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "masTresMedicinas", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "ulceraLesionCutanea", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "comidaCompleta", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "consumePaciente", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "frutaVerdura", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "vasosAgua", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "formaAlimento", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "bienNutrido", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "estadoSalud", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "circunBraquial", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "circunPantorrilla", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "evaTotal", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateNutricionCompletoDto.prototype, "dietaBalanceada", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateNutricionCompletoDto.prototype, "dentalesCompletas", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateNutricionCompletoDto.prototype, "dificultadMasticar", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateNutricionCompletoDto.prototype, "estrenimientoFrecu", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateNutricionCompletoDto.prototype, "diarreaFrecu", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateNutricionCompletoDto.prototype, "alergiaAlimentaria", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNutricionCompletoDto.prototype, "desayuno", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNutricionCompletoDto.prototype, "almuerzo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNutricionCompletoDto.prototype, "cena", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNutricionCompletoDto.prototype, "snacks", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNutricionCompletoDto.prototype, "preferencias", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNutricionCompletoDto.prototype, "quienCocina", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "imcDA", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "cintura", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "cadera", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "pantorrilla", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "brazo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "talla", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateNutricionCompletoDto.prototype, "peso", void 0);
//# sourceMappingURL=create-nutricioncompleto.dto.js.map