import { ApiProperty } from '@nestjs/swagger';

export class FichaGeneralDto {
  @ApiProperty({ description: 'ID de la ficha del paciente' })
  idFichaPaciente: string;

  @ApiProperty({ description: 'ID de datos generales', default: '' })
  idDatosGenerales: string;

  @ApiProperty({ description: 'ID de medicina', default: '' })
  idMedicina: string;

  @ApiProperty({ description: 'ID de enfermería', default: '' })
  idEnfermeria: string;

  @ApiProperty({ description: 'ID de nutrición', default: '' })
  idNutricion: string;

  @ApiProperty({ description: 'ID de fisioterapia', default: '' })
  idFisioterapia: string;
}
