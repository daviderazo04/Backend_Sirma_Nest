import { ActBasicasService } from './act-basicas.service';
import { CreateActBasicasDto } from './dto/create-act-basica.dto';
import { UpdateActBasicaDto } from './dto/update-act-basica.dto';
export declare class ActBasicasController {
    private readonly actBasicasService;
    constructor(actBasicasService: ActBasicasService);
    create(createActBasicaDto: CreateActBasicasDto): Promise<import("./entities/act-basica.entity").Actbasicas>;
    findAll(): Promise<import("./entities/act-basica.entity").Actbasicas[]>;
    findOne(id: string): Promise<import("./entities/act-basica.entity").Actbasicas>;
    update(id: string, updateActBasicaDto: UpdateActBasicaDto): Promise<import("./entities/act-basica.entity").Actbasicas>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
