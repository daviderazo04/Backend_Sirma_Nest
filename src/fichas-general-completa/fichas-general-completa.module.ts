import { Module } from '@nestjs/common';
import { FichasGeneralCompletaService } from './fichas-general-completa.service';
import { FichasGeneralCompletaController } from './fichas-general-completa.controller';

@Module({
  controllers: [FichasGeneralCompletaController],
  providers: [FichasGeneralCompletaService],
})
export class FichasGeneralCompletaModule {}