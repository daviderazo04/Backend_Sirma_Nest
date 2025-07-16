import { GeneralService } from './general.service';
import { CreateGeneralDto } from './dto/create-general.dto';
import { UpdateGeneralDto } from './dto/update-general.dto';
export declare class GeneralController {
    private readonly generalService;
    constructor(generalService: GeneralService);
    create(createGeneralDto: CreateGeneralDto): Promise<import("./entities/general.entity").General>;
    findAll(): Promise<import("./entities/general.entity").General[]>;
    findOne(id: string): Promise<import("./entities/general.entity").General>;
    update(id: string, updateGeneralDto: UpdateGeneralDto): Promise<import("./entities/general.entity").General>;
    remove(id: string): Promise<import("./entities/general.entity").General>;
}
