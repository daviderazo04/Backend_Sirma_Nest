import { Module } from '@nestjs/common';
import { RecursoSocialService } from './recurso-social.service';
import { RecursoSocialController } from './recurso-social.controller';

@Module({
  controllers: [RecursoSocialController],
  providers: [RecursoSocialService],
})
export class RecursoSocialModule {}
