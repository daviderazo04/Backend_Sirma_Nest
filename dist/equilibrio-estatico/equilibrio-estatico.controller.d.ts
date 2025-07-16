import { EquilibrioEstaticoService } from './equilibrio-estatico.service';
import { CreateEquilibrioEstaticoDto } from './dto/create-equilibrio-estatico.dto';
import { UpdateEquilibrioEstaticoDto } from './dto/update-equilibrio-estatico.dto';
export declare class EquilibrioEstaticoController {
    private readonly equilibrioEstaticoService;
    constructor(equilibrioEstaticoService: EquilibrioEstaticoService);
    create(createEquilibrioEstaticoDto: CreateEquilibrioEstaticoDto): Promise<import("./entities/equilibrio-estatico.entity").Equilibrioestatico>;
    findAll(): Promise<import("./entities/equilibrio-estatico.entity").Equilibrioestatico[]>;
    findOne(idfisioterapia: string): Promise<import("./entities/equilibrio-estatico.entity").Equilibrioestatico>;
    update(idfisioterapia: string, updateEquilibrioEstaticoDto: UpdateEquilibrioEstaticoDto): Promise<import("./entities/equilibrio-estatico.entity").Equilibrioestatico>;
    remove(idfisioterapia: string): Promise<void>;
}
