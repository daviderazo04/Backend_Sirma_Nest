import { Module } from '@nestjs/common';
import { ExamenSistemicoService } from './examen-sistemico.service';
import { ExamenSistemicoController } from './examen-sistemico.controller';

@Module({
  controllers: [ExamenSistemicoController],
  providers: [ExamenSistemicoService],
})
export class ExamenSistemicoModule {}
