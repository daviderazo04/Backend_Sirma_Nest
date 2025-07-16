import { ExamenRegionalService } from './examen-regional.service';
import { CreateExamenRegionalDto } from './dto/create-examen-regional.dto';
import { UpdateExamenRegionalDto } from './dto/update-examen-regional.dto';
export declare class ExamenRegionalController {
    private readonly examenRegionalService;
    constructor(examenRegionalService: ExamenRegionalService);
    create(createExamenRegionalDto: CreateExamenRegionalDto): Promise<import("./entities/examen-regional.entity").Examenregional>;
    findAll(): Promise<import("./entities/examen-regional.entity").Examenregional[]>;
    findOne(id: string): Promise<import("./entities/examen-regional.entity").Examenregional>;
    update(id: string, updateExamenRegionalDto: UpdateExamenRegionalDto): Promise<import("./entities/examen-regional.entity").Examenregional>;
    remove(id: string): Promise<import("./entities/examen-regional.entity").Examenregional>;
}
