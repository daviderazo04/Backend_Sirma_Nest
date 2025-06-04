import { Module } from '@nestjs/common';
import { CribajeService } from './cribaje.service';
import { CribajeController } from './cribaje.controller';

@Module({
  controllers: [CribajeController],
  providers: [CribajeService],
})
export class CribajeModule {}
