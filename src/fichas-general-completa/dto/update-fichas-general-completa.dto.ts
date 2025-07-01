import { PartialType } from '@nestjs/swagger';
import { CreateFichasGeneralCompletaDto } from './create-fichas-general-completa.dto';

export class UpdateFichasGeneralCompletaDto extends PartialType(CreateFichasGeneralCompletaDto) {}
