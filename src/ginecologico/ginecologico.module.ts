import { Module } from '@nestjs/common';
import { GinecologicoService } from './ginecologico.service';
import { GinecologicoController } from './ginecologico.controller';

@Module({
  controllers: [GinecologicoController],
  providers: [GinecologicoService],
})
export class GinecologicoModule {}
