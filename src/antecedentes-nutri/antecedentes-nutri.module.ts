// src/antecedentesnutri/antecedentesnutri.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Nutricion } from 'src/nutricion/entities/nutricion.entity'; // Importa la entidad Nutricion
import { Antecedentesnutri } from './entities/antecedentes-nutri.entity';
import { AntecedentesnutriController } from './antecedentes-nutri.controller';
import { AntecedentesnutriService } from './antecedentes-nutri.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Antecedentesnutri, Nutricion]), // Importa ambas entidades aquí
  ],
  controllers: [AntecedentesnutriController],
  providers: [AntecedentesnutriService],
  exports: [AntecedentesnutriService], // Exporta el servicio si lo necesitas en otros módulos
})
export class AntecedentesnutriModule {}
