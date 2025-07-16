import { FuerzaService } from './fuerza.service';
import { CreateFuerzaDto } from './dto/create-fuerza.dto';
import { UpdateFuerzaDto } from './dto/update-fuerza.dto';
export declare class FuerzaController {
    private readonly fuerzaService;
    constructor(fuerzaService: FuerzaService);
    create(createFuerzaDto: CreateFuerzaDto): Promise<import("./entities/fuerza.entity").Fuerza>;
    findAll(): Promise<import("./entities/fuerza.entity").Fuerza[]>;
    findOne(idfisioterapia: string): Promise<import("./entities/fuerza.entity").Fuerza>;
    update(idfisioterapia: string, updateFuerzaDto: UpdateFuerzaDto): Promise<import("./entities/fuerza.entity").Fuerza>;
    remove(idfisioterapia: string): Promise<void>;
}
