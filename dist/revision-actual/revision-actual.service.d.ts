import { Repository } from 'typeorm';
import { CreateRevisionActualDto } from './dto/create-revision-actual.dto';
import { UpdateRevisionActualDto } from './dto/update-revision-actual.dto';
import { Revisionactual } from './entities/revision-actual.entity';
import { MedicinaService } from '../medicina/medicina.service';
export declare class RevisionActualService {
    private revisionactualRepository;
    private medicinaService;
    constructor(revisionactualRepository: Repository<Revisionactual>, medicinaService: MedicinaService);
    create(createRevisionactualDto: CreateRevisionActualDto): Promise<Revisionactual>;
    findAll(): Promise<Revisionactual[]>;
    findOne(id: number): Promise<Revisionactual>;
    update(id: number, updateRevisionactualDto: UpdateRevisionActualDto): Promise<Revisionactual>;
    remove(id: number): Promise<Revisionactual>;
}
