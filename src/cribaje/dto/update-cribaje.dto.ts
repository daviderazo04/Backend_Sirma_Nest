import { PartialType } from '@nestjs/swagger';
import { CreateCribajeDto } from './create-cribaje.dto';

export class UpdateCribajeDto extends PartialType(CreateCribajeDto) {}
