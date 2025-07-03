import { Module } from '@nestjs/common';
import { NutricioncompletoService } from './nutricioncompleto.service';
import { NutricioncompletoController } from './nutricioncompleto.controller';

@Module({
  controllers: [NutricioncompletoController],
  providers: [NutricioncompletoService],
})
export class NutricioncompletoModule {}
