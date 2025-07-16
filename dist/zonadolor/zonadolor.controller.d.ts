import { ZonadolorService } from './zonadolor.service';
import { CreateZonadolorDto } from './dto/create-zonadolor.dto';
import { UpdateZonadolorDto } from './dto/update-zonadolor.dto';
export declare class ZonadolorController {
    private readonly zonadolorService;
    constructor(zonadolorService: ZonadolorService);
    create(createZonadolorDto: CreateZonadolorDto): Promise<import("./entities/zonadolor.entity").Zonadolor>;
    findAll(): Promise<import("./entities/zonadolor.entity").Zonadolor[]>;
    findOne(id: string): Promise<import("./entities/zonadolor.entity").Zonadolor>;
    update(id: string, updateZonadolorDto: UpdateZonadolorDto): Promise<import("./entities/zonadolor.entity").Zonadolor>;
    remove(id: string): Promise<void>;
}
