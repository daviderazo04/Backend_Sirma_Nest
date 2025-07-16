import { DepresionService } from './depresion.service';
import { CreateDepresionDto } from './dto/create-depresion.dto';
import { UpdateDepresionDto } from './dto/update-depresion.dto';
export declare class DepresionController {
    private readonly depresionService;
    constructor(depresionService: DepresionService);
    create(createDepresionDto: CreateDepresionDto): Promise<import("./entities/depresion.entity").Depresion>;
    findAll(): Promise<import("./entities/depresion.entity").Depresion[]>;
    findOne(id: number): Promise<import("./entities/depresion.entity").Depresion>;
    update(id: number, updateDepresionDto: UpdateDepresionDto): Promise<import("./entities/depresion.entity").Depresion>;
    remove(id: number): Promise<import("./entities/depresion.entity").Depresion>;
}
