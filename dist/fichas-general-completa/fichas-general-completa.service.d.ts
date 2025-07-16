import { DataSource } from 'typeorm';
import { CreateFichasGeneralCompletaDto } from './dto/create-fichas-general-completa.dto';
export declare class FichasGeneralCompletaService {
    private dataSource;
    constructor(dataSource: DataSource);
    crearFichaPersona(createFichaDto: CreateFichasGeneralCompletaDto): Promise<{
        message: any;
        idPersona: any;
        idFicha: any;
    } | {
        message: string;
        idPersona?: undefined;
        idFicha?: undefined;
    }>;
}
