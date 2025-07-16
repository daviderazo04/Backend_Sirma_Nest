import { TamizajeService } from './tamizaje.service';
import { CreateTamizajeDto } from './dto/create-tamizaje.dto';
import { UpdateTamizajeDto } from './dto/update-tamizaje.dto';
export declare class TamizajeController {
    private readonly tamizajeService;
    constructor(tamizajeService: TamizajeService);
    create(createTamizajeDto: CreateTamizajeDto): Promise<import("./entities/tamizaje.entity").Tamizaje>;
    findAll(): Promise<import("./entities/tamizaje.entity").Tamizaje[]>;
    findOne(id: string): Promise<import("./entities/tamizaje.entity").Tamizaje>;
    update(id: string, updateTamizajeDto: UpdateTamizajeDto): Promise<import("./entities/tamizaje.entity").Tamizaje>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
