import { Module } from '@nestjs/common';
import { AntecedentesNutriService } from './antecedentes-nutri.service';
import { AntecedentesNutriController } from './antecedentes-nutri.controller';

@Module({
  controllers: [AntecedentesNutriController],
  providers: [AntecedentesNutriService],
})
export class AntecedentesNutriModule {}
