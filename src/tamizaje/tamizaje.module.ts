import { Module, forwardRef } from '@nestjs/common';
import { TamizajeService } from './tamizaje.service';
import { TamizajeController } from './tamizaje.controller';
import { Tamizaje } from './entities/tamizaje.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnfermeriaModule } from '../enfermeria/enfermeria.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Tamizaje]),
    forwardRef(() => EnfermeriaModule),
  ],
  controllers: [TamizajeController],
  providers: [TamizajeService],
  exports: [TamizajeService],
})
export class TamizajeModule {}
