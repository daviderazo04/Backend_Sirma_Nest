import { Module } from '@nestjs/common';
import { PersonaFichaService } from './persona-ficha.service';
import { PersonaFichaController } from './persona-ficha.controller';
import { PersonaFicha } from './entities/persona-ficha.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonaFicha]), // ESTA LÍNEA ES CRÍTICA Y DEBE ESTAR AHÍ
  ],
  controllers: [PersonaFichaController],
  providers: [PersonaFichaService],
})
export class PersonaFichaModule {}
