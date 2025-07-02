// src/antecedentes-nutri/dto/update-antecedentes-nutri.dto.ts

import { PartialType } from '@nestjs/mapped-types';
// CORRECCIÓN: Cambiado 'CreateAntecedentesNutriDto' a 'CreateAntecedentesnutriDto'
import { CreateAntecedentesnutriDto } from './create-antecedentes-nutri.dto';

export class UpdateAntecedentesnutriDto extends PartialType(CreateAntecedentesnutriDto) {
  // Todas las propiedades de CreateAntecedentesnutriDto son opcionales aquí.
}
