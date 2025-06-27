import { Module } from '@nestjs/common';
import { NutricionService } from './nutricion.service';
import { NutricionController } from './nutricion.controller';
import { Nutricion } from './entities/nutricion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Nutricion])], 
  controllers: [NutricionController],
  providers: [NutricionService],
})
export class NutricionModule {}
