import { PartialType } from '@nestjs/swagger';
import { CreateSindromesGeriatricoDto } from './create-sindromes-geriatrico.dto';

export class UpdateSindromesGeriatricoDto extends PartialType(
  CreateSindromesGeriatricoDto,
) {}
