import { Module, forwardRef } from '@nestjs/common';
import { RecursoSocialService } from './recurso-social.service';
import { RecursoSocialController } from './recurso-social.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recursosocial } from './entities/recurso-social.entity';
import { EnfermeriaModule } from 'src/enfermeria/enfermeria.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recursosocial]),
    forwardRef(() => EnfermeriaModule), // Assuming you might need to reference this service
  ],
  controllers: [RecursoSocialController],
  providers: [RecursoSocialService],
  exports: [RecursoSocialService], // Exporting the service if needed in other modules
})
export class RecursoSocialModule {}
