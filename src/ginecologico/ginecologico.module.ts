// src/ginecologico/ginecologico.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GinecologicoService } from './ginecologico.service';
import { GinecologicoController } from './ginecologico.controller'; // Assuming you have this
import { Ginecologico } from './entities/ginecologico.entity';
import { MedicinaModule } from '../medicina/medicina.module'; // Import MedicinaModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Ginecologico]), // Register the Ginecologico entity with TypeORM
    forwardRef(() => MedicinaModule), // Import MedicinaModule to make MedicinaService available for injection
  ],
  controllers: [GinecologicoController], // Assuming you have this
  providers: [GinecologicoService],
  exports: [GinecologicoService]
})
export class GinecologicoModule {}