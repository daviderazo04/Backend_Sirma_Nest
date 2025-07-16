"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnfermeriaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_enfermeria_dto_1 = require("./create-enfermeria.dto");
class UpdateEnfermeriaDto extends (0, swagger_1.PartialType)(create_enfermeria_dto_1.CreateEnfermeriaDto) {
}
exports.UpdateEnfermeriaDto = UpdateEnfermeriaDto;
//# sourceMappingURL=update-enfermeria.dto.js.map