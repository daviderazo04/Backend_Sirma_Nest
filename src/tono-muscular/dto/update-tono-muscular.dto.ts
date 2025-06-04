import { PartialType } from '@nestjs/swagger';
import { CreateTonoMuscularDto } from './create-tono-muscular.dto';

export class UpdateTonoMuscularDto extends PartialType(CreateTonoMuscularDto) {}
