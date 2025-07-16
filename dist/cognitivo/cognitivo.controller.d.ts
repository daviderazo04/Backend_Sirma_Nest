import { CognitivoService } from './cognitivo.service';
import { CreateCognitivoDto } from './dto/create-cognitivo.dto';
import { UpdateCognitivoDto } from './dto/update-cognitivo.dto';
export declare class CognitivoController {
    private readonly cognitivoService;
    constructor(cognitivoService: CognitivoService);
    create(createCognitivoDto: CreateCognitivoDto): Promise<import("./entities/cognitivo.entity").Cognitivo>;
    findAll(): Promise<import("./entities/cognitivo.entity").Cognitivo[]>;
    findOne(id: number): Promise<import("./entities/cognitivo.entity").Cognitivo>;
    update(id: number, updateCognitivoDto: UpdateCognitivoDto): Promise<import("./entities/cognitivo.entity").Cognitivo>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
