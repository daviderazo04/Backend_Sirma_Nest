import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralService } from './general.service';
import { GeneralController } from './general.controller';
import { General } from './entities/general.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule


@Module({
  imports: [
    TypeOrmModule.forFeature([General]), // Make the GeneralRepository available
    forwardRef(() => MedicinaModule), // Import MedicinaModule so MedicinaService can be injected
  ],
  controllers: [GeneralController],
  providers: [GeneralService],
  exports: [GeneralService]
})
export class GeneralModule {}
