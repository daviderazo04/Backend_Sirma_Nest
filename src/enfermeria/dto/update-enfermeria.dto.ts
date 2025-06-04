import { PartialType } from '@nestjs/swagger';
import { CreateEnfermeriaDto } from './create-enfermeria.dto';

export class UpdateEnfermeriaDto extends PartialType(CreateEnfermeriaDto) {}
