import { IsInt, Min, Max } from 'class-validator';

export class CreateSatisfaccionInteligenciaArtificialDto {
  @IsInt()
  @Min(1)
  @Max(5)
  calificacion: number;
}
