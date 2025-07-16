import { PatologicoService } from './patologico.service';
import { CreatePatologicoDto } from './dto/create-patologico.dto';
import { UpdatePatologicoDto } from './dto/update-patologico.dto';
export declare class PatologicoController {
    private readonly patologicoService;
    constructor(patologicoService: PatologicoService);
    create(createPatologicoDto: CreatePatologicoDto): Promise<import("./entities/patologico.entity").Patologico>;
    findAll(): Promise<import("./entities/patologico.entity").Patologico[]>;
    findOne(id: string): Promise<import("./entities/patologico.entity").Patologico>;
    update(id: string, updatePatologicoDto: UpdatePatologicoDto): Promise<import("./entities/patologico.entity").Patologico>;
    remove(id: string): Promise<import("./entities/patologico.entity").Patologico>;
}
