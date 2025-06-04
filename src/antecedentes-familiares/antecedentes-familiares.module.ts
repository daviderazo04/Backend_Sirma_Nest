import { Module } from '@nestjs/common';
import { AntecedentesFamiliaresService } from './antecedentes-familiares.service';
import { AntecedentesFamiliaresController } from './antecedentes-familiares.controller';

@Module({
  controllers: [AntecedentesFamiliaresController],
  providers: [AntecedentesFamiliaresService],
})
export class AntecedentesFamiliaresModule {}
