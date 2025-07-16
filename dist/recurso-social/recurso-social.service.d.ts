import { CreateRecursoSocialDto } from './dto/create-recurso-social.dto';
import { UpdateRecursoSocialDto } from './dto/update-recurso-social.dto';
import { Recursosocial } from './entities/recurso-social.entity';
import { Repository } from 'typeorm';
import { EnfermeriaService } from 'src/enfermeria/enfermeria.service';
export declare class RecursoSocialService {
    private recursoSocialRepository;
    private enfermeriaService;
    constructor(recursoSocialRepository: Repository<Recursosocial>, enfermeriaService: EnfermeriaService);
    create(createRecursoSocialDto: CreateRecursoSocialDto): Promise<Recursosocial>;
    findAll(): Promise<Recursosocial[]>;
    findOne(id: number): Promise<Recursosocial>;
    update(id: number, updateRecursoSocialDto: UpdateRecursoSocialDto): Promise<Recursosocial>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
