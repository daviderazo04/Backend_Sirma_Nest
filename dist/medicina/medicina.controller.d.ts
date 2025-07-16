import { MedicinaService } from './medicina.service';
import { UpdateMedicinaDto } from './dto/update-medicina.dto';
import { CreateFullMedicinaDto } from './dto/create-full-medicina.dto';
import { UpdateFullMedicinaDto } from './dto/update-full-medicina.dto';
export declare class MedicinaController {
    private readonly medicinaService;
    constructor(medicinaService: MedicinaService);
    create(createFullMedicinaDto: CreateFullMedicinaDto): Promise<import("./entities/medicina.entity").Medicina>;
    findAll(): Promise<import("./entities/medicina.entity").Medicina[]>;
    findAllFull(): Promise<import("./entities/medicina.entity").Medicina[]>;
    findOne(id: string): Promise<import("./entities/medicina.entity").Medicina>;
    update(id: string, updateMedicinaDto: UpdateMedicinaDto): Promise<import("./entities/medicina.entity").Medicina>;
    patch(id: string, updateFullMedicinaDto: UpdateFullMedicinaDto): Promise<import("./entities/medicina.entity").Medicina>;
    remove(id: string): Promise<import("./entities/medicina.entity").Medicina>;
}
