import { Module, forwardRef } from '@nestjs/common';
import { CognitivoService } from './cognitivo.service';
import { CognitivoController } from './cognitivo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cognitivo } from './entities/cognitivo.entity';
import { EnfermeriaModule } from '../enfermeria/enfermeria.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cognitivo]),
    forwardRef(() => EnfermeriaModule),
  ],
  controllers: [CognitivoController],
  providers: [CognitivoService],
  exports: [CognitivoService],
})
export class CognitivoModule {}
