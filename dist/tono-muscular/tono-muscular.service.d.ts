import { Repository } from 'typeorm';
import { CreateTonoMuscularDto } from './dto/create-tono-muscular.dto';
import { UpdateTonoMuscularDto } from './dto/update-tono-muscular.dto';
import { Tonomuscular } from './entities/tono-muscular.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service';
export declare class TonoMuscularService {
    private tonomuscularRepository;
    private fisioterapiaService;
    constructor(tonomuscularRepository: Repository<Tonomuscular>, fisioterapiaService: FisioterapiaService);
    create(createTonoMuscularDto: CreateTonoMuscularDto): Promise<Tonomuscular>;
    findAll(): Promise<Tonomuscular[]>;
    findOne(idfisioterapia: number): Promise<Tonomuscular>;
    update(idfisioterapia: number, updateTonoMuscularDto: UpdateTonoMuscularDto): Promise<Tonomuscular>;
    remove(idfisioterapia: number): Promise<void>;
}
