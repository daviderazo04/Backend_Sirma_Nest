import { RecursoSocialService } from './recurso-social.service';
import { CreateRecursoSocialDto } from './dto/create-recurso-social.dto';
import { UpdateRecursoSocialDto } from './dto/update-recurso-social.dto';
export declare class RecursoSocialController {
    private readonly recursoSocialService;
    constructor(recursoSocialService: RecursoSocialService);
    create(createRecursoSocialDto: CreateRecursoSocialDto): Promise<import("./entities/recurso-social.entity").Recursosocial>;
    findAll(): Promise<import("./entities/recurso-social.entity").Recursosocial[]>;
    findOne(id: number): Promise<import("./entities/recurso-social.entity").Recursosocial>;
    update(id: number, updateRecursoSocialDto: UpdateRecursoSocialDto): Promise<import("./entities/recurso-social.entity").Recursosocial>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
