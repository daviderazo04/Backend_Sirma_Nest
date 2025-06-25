// src/dolor-fisio/dolor-fisio.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DolorFisioService } from './dolor-fisio.service';
import { DolorFisioController } from './dolor-fisio.controller';
import { Dolorfisio } from './entities/dolor-fisio.entity'; // Importa la entidad Dolorfisio
import { FisioterapiaModule } from '../fisioterapia/fisioterapia.module'; // Importa FisioterapiaModule
import { ZonadolorModule } from '../zonadolor/zonadolor.module'; // Importa ZonadolorModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Dolorfisio]), // Registra la entidad Dolorfisio
    forwardRef(() => FisioterapiaModule), // Importa FisioterapiaModule con forwardRef
    ZonadolorModule, // Importa ZonadolorModule
  ],
  controllers: [DolorFisioController],
  providers: [DolorFisioService],
  exports: [DolorFisioService], // Exporta el servicio si FisioterapiaService lo necesitará para 'Fisioterapia Full'
})
export class DolorFisioModule {}