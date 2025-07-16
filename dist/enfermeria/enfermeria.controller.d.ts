import { EnfermeriaService } from './enfermeria.service';
import { CreateFullEnfermeriaDto } from './dto/create-full-enfermeria.dto';
import { UpdateFullEnfermeriaDto } from './dto/update-full-enfermeria.dto';
import { UpdateEnfermeriaDto } from './dto/update-enfermeria.dto';
export declare class EnfermeriaController {
    private readonly enfermeriaService;
    constructor(enfermeriaService: EnfermeriaService);
    create(createFullEnfermeriaDto: CreateFullEnfermeriaDto): Promise<import("./entities/enfermeria.entity").Enfermeria>;
    findAll(): Promise<any>;
    findAllFull(): Promise<import("./entities/enfermeria.entity").Enfermeria[]>;
    findOne(id: string): Promise<import("./entities/enfermeria.entity").Enfermeria>;
    getEnfermeriaCompleta(idEnfermeria: string): Promise<any>;
    update(id: string, updateEnfermeriaDto: UpdateEnfermeriaDto): Promise<import("./entities/enfermeria.entity").Enfermeria>;
    patch(id: string, updateFullEnfermeriaDto: UpdateFullEnfermeriaDto): Promise<import("./entities/enfermeria.entity").Enfermeria>;
    remove(id: string): Promise<import("./entities/enfermeria.entity").Enfermeria>;
}
