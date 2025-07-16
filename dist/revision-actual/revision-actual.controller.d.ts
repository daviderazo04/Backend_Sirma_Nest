import { RevisionActualService } from './revision-actual.service';
import { CreateRevisionActualDto } from './dto/create-revision-actual.dto';
import { UpdateRevisionActualDto } from './dto/update-revision-actual.dto';
export declare class RevisionActualController {
    private readonly revisionActualService;
    constructor(revisionActualService: RevisionActualService);
    create(createRevisionActualDto: CreateRevisionActualDto): Promise<import("./entities/revision-actual.entity").Revisionactual>;
    findAll(): Promise<import("./entities/revision-actual.entity").Revisionactual[]>;
    findOne(id: string): Promise<import("./entities/revision-actual.entity").Revisionactual>;
    update(id: string, updateRevisionActualDto: UpdateRevisionActualDto): Promise<import("./entities/revision-actual.entity").Revisionactual>;
    remove(id: string): Promise<import("./entities/revision-actual.entity").Revisionactual>;
}
