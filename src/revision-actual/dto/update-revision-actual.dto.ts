import { PartialType } from '@nestjs/swagger';
import { CreateRevisionActualDto } from './create-revision-actual.dto';

export class UpdateRevisionActualDto extends PartialType(CreateRevisionActualDto) {}
