import { Injectable } from '@nestjs/common';
import { CreateRecursoSocialDto } from './dto/create-recurso-social.dto';
import { UpdateRecursoSocialDto } from './dto/update-recurso-social.dto';

@Injectable()
export class RecursoSocialService {
  create(createRecursoSocialDto: CreateRecursoSocialDto) {
    return 'This action adds a new recursoSocial';
  }

  findAll() {
    return `This action returns all recursoSocial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoSocial`;
  }

  update(id: number, updateRecursoSocialDto: UpdateRecursoSocialDto) {
    return `This action updates a #${id} recursoSocial`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoSocial`;
  }
}
