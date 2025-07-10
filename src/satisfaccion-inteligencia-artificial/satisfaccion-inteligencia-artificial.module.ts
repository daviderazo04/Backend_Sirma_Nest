import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SatisfaccionInteligenciaArtificial } from './entities/satisfaccion-inteligencia-artificial.entity';
import { SatisfaccionInteligenciaArtificialService } from './satisfaccion-inteligencia-artificial.service';
import { SatisfaccionInteligenciaArtificialController } from './satisfaccion-inteligencia-artificial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SatisfaccionInteligenciaArtificial])],
  controllers: [SatisfaccionInteligenciaArtificialController],
  providers: [SatisfaccionInteligenciaArtificialService],
})
export class SatisfaccionInteligenciaArtificialModule {}
