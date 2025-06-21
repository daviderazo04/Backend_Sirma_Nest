import { PartialType } from '@nestjs/swagger';
import { CreateRecursoSocialDto } from './create-recurso-social.dto';

export class UpdateRecursoSocialDto extends PartialType(
  CreateRecursoSocialDto,
) {}
