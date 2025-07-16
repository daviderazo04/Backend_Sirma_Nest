import { DiagnosticoService } from './diagnostico.service';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
export declare class DiagnosticoController {
    private readonly diagnosticoService;
    constructor(diagnosticoService: DiagnosticoService);
    create(createDiagnosticoDto: CreateDiagnosticoDto): Promise<import("./entities/diagnostico.entity").Diagnostico>;
    findAll(): Promise<import("./entities/diagnostico.entity").Diagnostico[]>;
    findOne(id: string): Promise<import("./entities/diagnostico.entity").Diagnostico>;
    update(id: string, updateDiagnosticoDto: UpdateDiagnosticoDto): Promise<import("./entities/diagnostico.entity").Diagnostico>;
    remove(id: string): Promise<import("./entities/diagnostico.entity").Diagnostico>;
}
