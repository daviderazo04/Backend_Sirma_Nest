import { Module } from '@nestjs/common';
import { EquilibrioEstaticoService } from './equilibrio-estatico.service';
import { EquilibrioEstaticoController } from './equilibrio-estatico.controller';

@Module({
  controllers: [EquilibrioEstaticoController],
  providers: [EquilibrioEstaticoService],
})
export class EquilibrioEstaticoModule {}
