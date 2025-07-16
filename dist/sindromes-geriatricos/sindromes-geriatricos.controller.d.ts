import { SindromesGeriatricosService } from './sindromes-geriatricos.service';
import { CreateSindromesGeriatricoDto } from './dto/create-sindromes-geriatrico.dto';
import { UpdateSindromesGeriatricoDto } from './dto/update-sindromes-geriatrico.dto';
export declare class SindromesGeriatricosController {
    private readonly sindromesGeriatricosService;
    constructor(sindromesGeriatricosService: SindromesGeriatricosService);
    create(createSindromesGeriatricoDto: CreateSindromesGeriatricoDto): Promise<import("./entities/sindromes-geriatrico.entity").Sindromesgeriatricos>;
    findAll(): Promise<import("./entities/sindromes-geriatrico.entity").Sindromesgeriatricos[]>;
    findOne(id: string): Promise<import("./entities/sindromes-geriatrico.entity").Sindromesgeriatricos>;
    update(id: string, updateSindromesGeriatricoDto: UpdateSindromesGeriatricoDto): Promise<import("./entities/sindromes-geriatrico.entity").Sindromesgeriatricos>;
    remove(id: string): Promise<import("./entities/sindromes-geriatrico.entity").Sindromesgeriatricos>;
}
