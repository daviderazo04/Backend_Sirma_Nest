import { ExamenSistemicoService } from './examen-sistemico.service';
import { CreateExamenSistemicoDto } from './dto/create-examen-sistemico.dto';
import { UpdateExamenSistemicoDto } from './dto/update-examen-sistemico.dto';
export declare class ExamenSistemicoController {
    private readonly examenSistemicoService;
    constructor(examenSistemicoService: ExamenSistemicoService);
    create(createExamenSistemicoDto: CreateExamenSistemicoDto): Promise<import("./entities/examen-sistemico.entity").Examensistemico>;
    findAll(): Promise<import("./entities/examen-sistemico.entity").Examensistemico[]>;
    findOne(id: string): Promise<import("./entities/examen-sistemico.entity").Examensistemico>;
    update(id: string, updateExamenSistemicoDto: UpdateExamenSistemicoDto): Promise<import("./entities/examen-sistemico.entity").Examensistemico>;
    remove(id: string): Promise<import("./entities/examen-sistemico.entity").Examensistemico>;
}
