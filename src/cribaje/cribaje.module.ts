import { Module } from '@nestjs/common';
import { CribajeService } from './cribaje.service';
import { CribajeController } from './cribaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cribaje } from './entities/cribaje.entity';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cribaje, Nutricion])],
  controllers: [CribajeController],
  providers: [CribajeService],
})
export class CribajeModule {}
