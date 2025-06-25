// src/zonadolor/zonadolor.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { ZonadolorService } from './zonadolor.service';
import { ZonadolorController } from './zonadolor.controller';
import { Zonadolor } from './entities/zonadolor.entity'; // Importa la entidad Zonadolor

@Module({
  imports: [
    TypeOrmModule.forFeature([Zonadolor]), // Registra la entidad Zonadolor
  ],
  controllers: [ZonadolorController],
  providers: [ZonadolorService],
  exports: [ZonadolorService], // Exporta el servicio para que DolorfisioService pueda inyectarlo
})
export class ZonadolorModule {}