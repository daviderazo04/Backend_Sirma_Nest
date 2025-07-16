"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHabitoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_habito_dto_1 = require("./create-habito.dto");
class UpdateHabitoDto extends (0, swagger_1.PartialType)(create_habito_dto_1.CreateHabitoDto) {
}
exports.UpdateHabitoDto = UpdateHabitoDto;
//# sourceMappingURL=update-habito.dto.js.map