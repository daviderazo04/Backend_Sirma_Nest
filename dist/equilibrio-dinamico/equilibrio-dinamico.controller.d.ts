import { EquilibrioDinamicoService } from './equilibrio-dinamico.service';
import { CreateEquilibrioDinamicoDto } from './dto/create-equilibrio-dinamico.dto';
import { UpdateEquilibrioDinamicoDto } from './dto/update-equilibrio-dinamico.dto';
export declare class EquilibrioDinamicoController {
    private readonly equilibrioDinamicoService;
    constructor(equilibrioDinamicoService: EquilibrioDinamicoService);
    create(createEquilibrioDinamicoDto: CreateEquilibrioDinamicoDto): Promise<import("./entities/equilibrio-dinamico.entity").Equilibriodinamico>;
    findAll(): Promise<import("./entities/equilibrio-dinamico.entity").Equilibriodinamico[]>;
    findOne(idfisioterapia: string): Promise<import("./entities/equilibrio-dinamico.entity").Equilibriodinamico>;
    update(idfisioterapia: string, updateEquilibrioDinamicoDto: UpdateEquilibrioDinamicoDto): Promise<import("./entities/equilibrio-dinamico.entity").Equilibriodinamico>;
    remove(idfisioterapia: string): Promise<void>;
}
