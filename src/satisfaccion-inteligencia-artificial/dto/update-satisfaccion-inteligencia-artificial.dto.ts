import { PartialType } from '@nestjs/swagger';
import { CreateSatisfaccionInteligenciaArtificialDto } from './create-satisfaccion-inteligencia-artificial.dto';

export class UpdateSatisfaccionInteligenciaArtificialDto extends PartialType(CreateSatisfaccionInteligenciaArtificialDto) {}
