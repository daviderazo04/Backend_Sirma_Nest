import { NutricioncompletoService } from './nutricioncompleto.service';
import { CreateNutricionCompletoDto } from './dto/create-nutricioncompleto.dto';
export declare class NutricioncompletoController {
    private readonly service;
    constructor(service: NutricioncompletoService);
    crear(dto: CreateNutricionCompletoDto): Promise<{
        mensaje: string;
    }>;
    obtenerPorIdFicha(idFicha: string): Promise<any>;
    obtenerPorIdNutricion(idNutricion: number): Promise<any>;
    actualizar(idNutricion: number, dto: CreateNutricionCompletoDto): Promise<any>;
}
