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
exports.Usuarios = void 0;
const typeorm_1 = require("typeorm");
let Usuarios = class Usuarios {
    idusuario;
    userNombre;
    userApellido;
    userCorreo;
    userClave;
    userCedula;
    userRol;
    userEstado;
};
exports.Usuarios = Usuarios;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'IDUSUARIO' }),
    __metadata("design:type", Number)
], Usuarios.prototype, "idusuario", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'USER_NOMBRE', nullable: true, length: 30 }),
    __metadata("design:type", Object)
], Usuarios.prototype, "userNombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'USER_APELLIDO', nullable: true, length: 30 }),
    __metadata("design:type", Object)
], Usuarios.prototype, "userApellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'USER_CORREO', nullable: true, length: 80 }),
    __metadata("design:type", Object)
], Usuarios.prototype, "userCorreo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'USER_CLAVE', nullable: true, length: 30 }),
    __metadata("design:type", Object)
], Usuarios.prototype, "userClave", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'USER_CEDULA', nullable: true, length: 10 }),
    __metadata("design:type", Object)
], Usuarios.prototype, "userCedula", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'USER_ROL', nullable: true, length: 15 }),
    __metadata("design:type", Object)
], Usuarios.prototype, "userRol", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'USER_ESTADO', nullable: true, length: 8 }),
    __metadata("design:type", Object)
], Usuarios.prototype, "userEstado", void 0);
exports.Usuarios = Usuarios = __decorate([
    (0, typeorm_1.Entity)('USUARIOS', { schema: 'Sirma' })
], Usuarios);
//# sourceMappingURL=usuario.entity.js.map