import { PartialType } from '@nestjs/swagger';
import { CreateDatosGeneraleDto } from './create-datos-generale.dto';

export class UpdateDatosGeneraleDto extends PartialType(CreateDatosGeneraleDto) {}
