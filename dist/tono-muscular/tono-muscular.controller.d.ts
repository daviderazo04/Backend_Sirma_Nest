import { TonoMuscularService } from './tono-muscular.service';
import { CreateTonoMuscularDto } from './dto/create-tono-muscular.dto';
import { UpdateTonoMuscularDto } from './dto/update-tono-muscular.dto';
export declare class TonoMuscularController {
    private readonly tonoMuscularService;
    constructor(tonoMuscularService: TonoMuscularService);
    create(createTonoMuscularDto: CreateTonoMuscularDto): Promise<import("./entities/tono-muscular.entity").Tonomuscular>;
    findAll(): Promise<import("./entities/tono-muscular.entity").Tonomuscular[]>;
    findOne(idfisioterapia: string): Promise<import("./entities/tono-muscular.entity").Tonomuscular>;
    update(idfisioterapia: string, updateTonoMuscularDto: UpdateTonoMuscularDto): Promise<import("./entities/tono-muscular.entity").Tonomuscular>;
    remove(idfisioterapia: string): Promise<void>;
}
