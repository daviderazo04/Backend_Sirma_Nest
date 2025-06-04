import { PartialType } from '@nestjs/swagger';
import { CreateActInstrumentalDto } from './create-act-instrumental.dto';

export class UpdateActInstrumentalDto extends PartialType(CreateActInstrumentalDto) {}
