"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonaFichaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_persona_ficha_dto_1 = require("./create-persona-ficha.dto");
class UpdatePersonaFichaDto extends (0, mapped_types_1.PartialType)(create_persona_ficha_dto_1.CreatePersonaFichaDto) {
}
exports.UpdatePersonaFichaDto = UpdatePersonaFichaDto;
//# sourceMappingURL=update-persona-ficha.dto.js.map