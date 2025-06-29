import { Module, forwardRef } from '@nestjs/common';
import { ActInstrumentalService } from './act-instrumental.service';
import { ActInstrumentalController } from './act-instrumental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actinstrumental } from './entities/act-instrumental.entity';
import { EnfermeriaModule } from '../enfermeria/enfermeria.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Actinstrumental]),
    forwardRef(() => EnfermeriaModule),
  ],
  controllers: [ActInstrumentalController],
  providers: [ActInstrumentalService],
  exports: [ActInstrumentalService],
})
export class ActInstrumentalModule {}
