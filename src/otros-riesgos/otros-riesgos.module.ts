import { Module, forwardRef } from '@nestjs/common';
import { OtrosRiesgosService } from './otros-riesgos.service';
import { OtrosRiesgosController } from './otros-riesgos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnfermeriaModule } from '../enfermeria/enfermeria.module';
import { Otrosriesgos } from './entities/otros-riesgo.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Otrosriesgos]),
    forwardRef(() => EnfermeriaModule),
  ],
  controllers: [OtrosRiesgosController],
  providers: [OtrosRiesgosService],
  exports: [OtrosRiesgosService],
})
export class OtrosRiesgosModule {}
