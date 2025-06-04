import { PartialType } from '@nestjs/swagger';
import { CreateZonadolorDto } from './create-zonadolor.dto';

export class UpdateZonadolorDto extends PartialType(CreateZonadolorDto) {}
