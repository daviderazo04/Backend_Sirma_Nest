import { ActInstrumentalService } from './act-instrumental.service';
import { CreateActInstrumentalDto } from './dto/create-act-instrumental.dto';
import { UpdateActInstrumentalDto } from './dto/update-act-instrumental.dto';
export declare class ActInstrumentalController {
    private readonly actInstrumentalService;
    constructor(actInstrumentalService: ActInstrumentalService);
    create(dto: CreateActInstrumentalDto): Promise<import("./entities/act-instrumental.entity").Actinstrumental>;
    findAll(): Promise<import("./entities/act-instrumental.entity").Actinstrumental[]>;
    findOne(id: number): Promise<import("./entities/act-instrumental.entity").Actinstrumental>;
    update(id: number, dto: UpdateActInstrumentalDto): Promise<import("./entities/act-instrumental.entity").Actinstrumental>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
