import { PartialType } from '@nestjs/swagger';
import { CreateDolorFisioDto } from './create-dolor-fisio.dto';

export class UpdateDolorFisioDto extends PartialType(CreateDolorFisioDto) {}
