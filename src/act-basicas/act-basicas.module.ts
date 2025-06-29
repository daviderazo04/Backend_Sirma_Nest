import { Module, forwardRef } from '@nestjs/common';
import { ActBasicasService } from './act-basicas.service';
import { ActBasicasController } from './act-basicas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actbasicas } from './entities/act-basica.entity';
import { EnfermeriaModule } from '../enfermeria/enfermeria.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Actbasicas]),
    forwardRef(() => EnfermeriaModule),
  ],
  controllers: [ActBasicasController],
  providers: [ActBasicasService],
  exports: [ActBasicasService],
})
export class ActBasicasModule {}
