import { PartialType } from '@nestjs/swagger';
import { CreateMedicinaDto } from './create-medicina.dto';

export class UpdateMedicinaDto extends PartialType(CreateMedicinaDto) {}
