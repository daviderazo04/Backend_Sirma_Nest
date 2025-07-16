import { FarmacologicoService } from './farmacologico.service';
import { CreateFarmacologicoDto } from './dto/create-farmacologico.dto';
import { UpdateFarmacologicoDto } from './dto/update-farmacologico.dto';
export declare class FarmacologicoController {
    private readonly farmacologicoService;
    constructor(farmacologicoService: FarmacologicoService);
    create(createFarmacologicoDto: CreateFarmacologicoDto): Promise<import("./entities/farmacologico.entity").Farmacologico>;
    findAll(): Promise<import("./entities/farmacologico.entity").Farmacologico[]>;
    findOne(id: string): Promise<import("./entities/farmacologico.entity").Farmacologico>;
    update(id: string, updateFarmacologicoDto: UpdateFarmacologicoDto): Promise<import("./entities/farmacologico.entity").Farmacologico>;
    remove(id: string): Promise<import("./entities/farmacologico.entity").Farmacologico>;
}
