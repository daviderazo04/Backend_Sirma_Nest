import { FichasGeneralCompletaService } from './fichas-general-completa.service';
import { CreateFichasGeneralCompletaDto } from './dto/create-fichas-general-completa.dto';
export declare class FichasGeneralCompletaController {
    private readonly fichasGeneralCompletaService;
    constructor(fichasGeneralCompletaService: FichasGeneralCompletaService);
    crearFicha(createFichaDto: CreateFichasGeneralCompletaDto): Promise<{
        message: any;
        idPersona: any;
        idFicha: any;
    } | {
        message: string;
        idPersona?: undefined;
        idFicha?: undefined;
    }>;
}
