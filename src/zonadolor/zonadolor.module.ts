import { Module } from '@nestjs/common';
import { ZonadolorService } from './zonadolor.service';
import { ZonadolorController } from './zonadolor.controller';

@Module({
  controllers: [ZonadolorController],
  providers: [ZonadolorService],
})
export class ZonadolorModule {}
