import { SatisfaccionInteligenciaArtificialService } from './satisfaccion-inteligencia-artificial.service';
import { CreateSatisfaccionInteligenciaArtificialDto } from './dto/create-satisfaccion-inteligencia-artificial.dto';
export declare class SatisfaccionInteligenciaArtificialController {
    private readonly service;
    constructor(service: SatisfaccionInteligenciaArtificialService);
    create(createDto: CreateSatisfaccionInteligenciaArtificialDto): Promise<Partial<import("./entities/satisfaccion-inteligencia-artificial.entity").SatisfaccionInteligenciaArtificial> & import("./entities/satisfaccion-inteligencia-artificial.entity").SatisfaccionInteligenciaArtificial>;
    findAll(): Promise<import("./entities/satisfaccion-inteligencia-artificial.entity").SatisfaccionInteligenciaArtificial[]>;
    getGrafica(): Promise<any[]>;
    findOne(id: string): Promise<import("./entities/satisfaccion-inteligencia-artificial.entity").SatisfaccionInteligenciaArtificial | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
