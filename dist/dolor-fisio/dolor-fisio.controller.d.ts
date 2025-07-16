import { DolorFisioService } from './dolor-fisio.service';
import { CreateDolorFisioDto } from './dto/create-dolor-fisio.dto';
import { UpdateDolorFisioDto } from './dto/update-dolor-fisio.dto';
export declare class DolorFisioController {
    private readonly dolorFisioService;
    constructor(dolorFisioService: DolorFisioService);
    create(createDolorFisioDto: CreateDolorFisioDto): Promise<import("./entities/dolor-fisio.entity").Dolorfisio>;
    findAll(): Promise<import("./entities/dolor-fisio.entity").Dolorfisio[]>;
    findOne(id: string): Promise<import("./entities/dolor-fisio.entity").Dolorfisio>;
    update(id: string, updateDolorFisioDto: UpdateDolorFisioDto): Promise<import("./entities/dolor-fisio.entity").Dolorfisio>;
    remove(id: string): Promise<void>;
}
