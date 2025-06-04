import { Injectable } from '@nestjs/common';
import { CreateRevisionActualDto } from './dto/create-revision-actual.dto';
import { UpdateRevisionActualDto } from './dto/update-revision-actual.dto';

@Injectable()
export class RevisionActualService {
  create(createRevisionActualDto: CreateRevisionActualDto) {
    return 'This action adds a new revisionActual';
  }

  findAll() {
    return `This action returns all revisionActual`;
  }

  findOne(id: number) {
    return `This action returns a #${id} revisionActual`;
  }

  update(id: number, updateRevisionActualDto: UpdateRevisionActualDto) {
    return `This action updates a #${id} revisionActual`;
  }

  remove(id: number) {
    return `This action removes a #${id} revisionActual`;
  }
}
