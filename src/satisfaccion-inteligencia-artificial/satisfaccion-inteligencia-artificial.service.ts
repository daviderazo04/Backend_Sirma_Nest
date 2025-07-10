import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SatisfaccionInteligenciaArtificial } from './entities/satisfaccion-inteligencia-artificial.entity';

@Injectable()
export class SatisfaccionInteligenciaArtificialService {
  constructor(
    @InjectRepository(SatisfaccionInteligenciaArtificial)
    private readonly repo: Repository<SatisfaccionInteligenciaArtificial>,
  ) {}

  create(data: Partial<SatisfaccionInteligenciaArtificial>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  // Endpoint para gráfica: cuenta de cada calificación
  async getCalificacionesChart() {
    return this.repo
      .createQueryBuilder('c')
      .select('c.calificacion', 'calificacion')
      .addSelect('COUNT(*)', 'cantidad')
      .groupBy('c.calificacion')
      .orderBy('c.calificacion')
      .getRawMany();
  }
}