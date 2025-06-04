import { PartialType } from '@nestjs/swagger';
import { CreateGinecologicoDto } from './create-ginecologico.dto';

export class UpdateGinecologicoDto extends PartialType(CreateGinecologicoDto) {}
