import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enfermeria } from './entities/enfermeria.entity';
import { EnfermeriaService } from './enfermeria.service';
import { EnfermeriaController } from './enfermeria.controller';
import { PacienteModule } from '../paciente/paciente.module';
import { ActBasicasModule } from '../act-basicas/act-basicas.module';
import { ActInstrumentalModule } from '../act-instrumental/act-instrumental.module';
import { CognitivoModule } from '../cognitivo/cognitivo.module';
import { DepresionModule } from '../depresion/depresion.module';
import { OtrosRiesgosModule } from '../otros-riesgos/otros-riesgos.module';
import { RecursoSocialModule } from '../recurso-social/recurso-social.module';
import { TamizajeModule } from '../tamizaje/tamizaje.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enfermeria]),
    forwardRef(() => ActBasicasModule),    // 👈 Importa aquí
    forwardRef(() => ActInstrumentalModule),
    forwardRef(() => CognitivoModule),
    forwardRef(() => DepresionModule),
    forwardRef(() => OtrosRiesgosModule),
    forwardRef(() => RecursoSocialModule),
    forwardRef(() => TamizajeModule),
    forwardRef(() => PacienteModule),
  ],
  controllers: [EnfermeriaController],
  providers: [EnfermeriaService],
  exports: [EnfermeriaService],
})
export class EnfermeriaModule {}
