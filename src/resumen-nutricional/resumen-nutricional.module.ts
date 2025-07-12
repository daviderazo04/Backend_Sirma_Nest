import { Module } from '@nestjs/common';
import { ResumenNutricionalController } from './resumen-nutricional.controller';

@Module({
  controllers: [ResumenNutricionalController],
})
export class ResumenNutricionalModule {}
