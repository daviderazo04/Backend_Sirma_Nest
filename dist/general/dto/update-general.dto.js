"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeneralDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_general_dto_1 = require("./create-general.dto");
class UpdateGeneralDto extends (0, swagger_1.PartialType)(create_general_dto_1.CreateGeneralDto) {
}
exports.UpdateGeneralDto = UpdateGeneralDto;
//# sourceMappingURL=update-general.dto.js.map