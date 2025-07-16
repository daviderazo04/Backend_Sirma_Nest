"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguimientoSaludService = void 0;
const common_1 = require("@nestjs/common");
let SeguimientoSaludService = class SeguimientoSaludService {
    create(createSeguimientoSaludDto) {
        return 'This action adds a new seguimientoSalud';
    }
    findAll() {
        return `This action returns all seguimientoSalud`;
    }
    findOne(id) {
        return `This action returns a #${id} seguimientoSalud`;
    }
    update(id, updateSeguimientoSaludDto) {
        return `This action updates a #${id} seguimientoSalud`;
    }
    remove(id) {
        return `This action removes a #${id} seguimientoSalud`;
    }
};
exports.SeguimientoSaludService = SeguimientoSaludService;
exports.SeguimientoSaludService = SeguimientoSaludService = __decorate([
    (0, common_1.Injectable)()
], SeguimientoSaludService);
//# sourceMappingURL=seguimiento-salud.service.js.map