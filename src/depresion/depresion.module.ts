import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepresionService } from './depresion.service';
import { DepresionController } from './depresion.controller';
import { Depresion } from './entities/depresion.entity';
import { EnfermeriaModule } from '../enfermeria/enfermeria.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Depresion]),
    forwardRef(() => EnfermeriaModule),
  ],
  controllers: [DepresionController],
  providers: [DepresionService],
  exports: [DepresionService],
})
export class DepresionModule {}
