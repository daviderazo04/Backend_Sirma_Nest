import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralService } from './general.service';
import { GeneralController } from './general.controller';
import { General } from './entities/general.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule


@Module({
  imports: [
    TypeOrmModule.forFeature([General]), // Make the GeneralRepository available
    MedicinaModule, // Import MedicinaModule so MedicinaService can be injected
  ],
  controllers: [GeneralController],
  providers: [GeneralService],
})
export class GeneralModule {}
