import { Module } from '@nestjs/common';
import { FarmacologicoService } from './farmacologico.service';
import { FarmacologicoController } from './farmacologico.controller';

@Module({
  controllers: [FarmacologicoController],
  providers: [FarmacologicoService],
})
export class FarmacologicoModule {}
