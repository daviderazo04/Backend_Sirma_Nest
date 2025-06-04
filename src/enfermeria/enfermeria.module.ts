import { Module } from '@nestjs/common';
import { EnfermeriaService } from './enfermeria.service';
import { EnfermeriaController } from './enfermeria.controller';

@Module({
  controllers: [EnfermeriaController],
  providers: [EnfermeriaService],
})
export class EnfermeriaModule {}
