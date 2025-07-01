import { Module, forwardRef } from '@nestjs/common';
import { ActBasicasService } from './act-basicas.service';
import { ActBasicasController } from './act-basicas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actbasicas } from './entities/act-basica.entity';
import { EnfermeriaModule } from '../enfermeria/enfermeria.module';
import { Enfermeria } from '../enfermeria/entities/enfermeria.entity'; // Importa la entidad Enfermeria
@Module({
  imports: [
    TypeOrmModule.forFeature([Actbasicas, Enfermeria]),
    forwardRef(() => EnfermeriaModule),
  ],
  controllers: [ActBasicasController],
  providers: [ActBasicasService],
  exports: [ActBasicasService],
})
export class ActBasicasModule {}
