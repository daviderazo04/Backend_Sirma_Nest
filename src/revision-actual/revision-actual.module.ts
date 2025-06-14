import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- Ensure this is imported
import { RevisionActualService } from './revision-actual.service';
import { RevisionActualController } from './revision-actual.controller';
import { Revisionactual } from './entities/revision-actual.entity'; // <-- Ensure your entity is imported
import { MedicinaModule } from '../medicina/medicina.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Revisionactual]), // <--- THIS LINE IS CRUCIAL FOR THE REPOSITORY
    forwardRef(() => MedicinaModule),
  ],
  controllers: [RevisionActualController],
  providers: [RevisionActualService],
  exports: [RevisionActualService]
})
export class RevisionActualModule {}
