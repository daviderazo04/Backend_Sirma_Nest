import { Connection } from 'typeorm';
import { CreateNutricionCompletoDto } from './dto/create-nutricioncompleto.dto';
export declare class NutricioncompletoService {
    private readonly connection;
    constructor(connection: Connection);
    crear(dto: CreateNutricionCompletoDto): Promise<{
        mensaje: string;
    }>;
    obtenerPorIdFicha(idFicha: string): Promise<any>;
    obtenerPorIdNutricion(idNutricion: number): Promise<any>;
    actualizar(idNutricion: number, dto: CreateNutricionCompletoDto): Promise<any>;
}
