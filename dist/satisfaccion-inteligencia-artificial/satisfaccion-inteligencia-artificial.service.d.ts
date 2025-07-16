import { Repository } from 'typeorm';
import { SatisfaccionInteligenciaArtificial } from './entities/satisfaccion-inteligencia-artificial.entity';
export declare class SatisfaccionInteligenciaArtificialService {
    private readonly repo;
    constructor(repo: Repository<SatisfaccionInteligenciaArtificial>);
    create(data: Partial<SatisfaccionInteligenciaArtificial>): Promise<Partial<SatisfaccionInteligenciaArtificial> & SatisfaccionInteligenciaArtificial>;
    findAll(): Promise<SatisfaccionInteligenciaArtificial[]>;
    findOne(id: number): Promise<SatisfaccionInteligenciaArtificial | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    getCalificacionesChart(): Promise<any[]>;
}
