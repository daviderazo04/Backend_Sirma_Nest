import { GinecologicoService } from './ginecologico.service';
import { CreateGinecologicoDto } from './dto/create-ginecologico.dto';
import { UpdateGinecologicoDto } from './dto/update-ginecologico.dto';
export declare class GinecologicoController {
    private readonly ginecologicoService;
    constructor(ginecologicoService: GinecologicoService);
    create(createGinecologicoDto: CreateGinecologicoDto): Promise<import("./entities/ginecologico.entity").Ginecologico>;
    findAll(): Promise<import("./entities/ginecologico.entity").Ginecologico[]>;
    findOne(id: string): Promise<import("./entities/ginecologico.entity").Ginecologico>;
    update(id: string, updateGinecologicoDto: UpdateGinecologicoDto): Promise<import("./entities/ginecologico.entity").Ginecologico>;
    remove(id: string): Promise<import("./entities/ginecologico.entity").Ginecologico>;
}
