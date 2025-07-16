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
exports.Persona = void 0;
const persona_ficha_entity_1 = require("../../persona-ficha/entities/persona-ficha.entity");
const typeorm_1 = require("typeorm");
let Persona = class Persona {
    idpersona;
    perComunidad;
    perZona;
    perGeorreferenciacion;
    perPrimernombre;
    perSegundonombre;
    perPrimerapellido;
    perSegundoapellido;
    perCedula;
    perFechanacimiento;
    perEdad;
    perSexo;
    perEstadocivil;
    perOcupacion;
    perInstruccion;
    perCuidador;
    personaFichas;
};
exports.Persona = Persona;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDPERSONA' }),
    __metadata("design:type", Number)
], Persona.prototype, "idpersona", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_COMUNIDAD',
        nullable: true,
        comment: 'Comunidad a la que pertenece',
        length: 10,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perComunidad", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', {
        name: 'PER_ZONA',
        nullable: true,
        comment: 'Zona dentro de la comunidad a la que pertenece',
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perZona", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_GEORREFERENCIACION',
        nullable: true,
        comment: 'Georreferenciación del paciente',
        length: 200,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perGeorreferenciacion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_PRIMERNOMBRE',
        nullable: true,
        comment: 'Primer nombre del paciente',
        length: 50,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perPrimernombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_SEGUNDONOMBRE',
        nullable: true,
        comment: 'Segundo nombre del paciente',
        length: 50,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perSegundonombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'PER_PRIMERAPELLIDO', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Persona.prototype, "perPrimerapellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_SEGUNDOAPELLIDO',
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perSegundoapellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_CEDULA',
        nullable: true,
        comment: 'Número de cédula del paciente',
        length: 10,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perCedula", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        name: 'PER_FECHANACIMIENTO',
        nullable: true,
        comment: 'Fecha de nacimiento del paciente',
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perFechanacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', {
        name: 'PER_EDAD',
        nullable: true,
        comment: 'Edad del paciente',
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perEdad", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_SEXO',
        nullable: true,
        comment: 'Sexo del paciente',
        length: 9,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perSexo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_ESTADOCIVIL',
        nullable: true,
        comment: 'Estado civil del paciente',
        length: 11,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perEstadocivil", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_OCUPACION',
        nullable: true,
        comment: 'Ocupación del paciente',
        length: 20,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perOcupacion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_INSTRUCCION',
        nullable: true,
        comment: 'Nivel de educación del paciente',
        length: 10,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perInstruccion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'PER_CUIDADOR',
        nullable: true,
        comment: 'Nombre y apellido del cuidador del paciente (si lo tiene)',
        length: 80,
    }),
    __metadata("design:type", Object)
], Persona.prototype, "perCuidador", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => persona_ficha_entity_1.PersonaFicha, (personaFicha) => personaFicha.idpersona2),
    __metadata("design:type", Array)
], Persona.prototype, "personaFichas", void 0);
exports.Persona = Persona = __decorate([
    (0, typeorm_1.Entity)('PERSONA', { schema: 'Sirma' })
], Persona);
//# sourceMappingURL=persona.entity.js.map