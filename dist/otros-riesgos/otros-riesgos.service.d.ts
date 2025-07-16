import { Repository } from 'typeorm';
import { CreateOtrosRiesgoDto } from './dto/create-otros-riesgo.dto';
import { UpdateOtrosRiesgoDto } from './dto/update-otros-riesgo.dto';
import { Otrosriesgos } from './entities/otros-riesgo.entity';
import { EnfermeriaService } from '../enfermeria/enfermeria.service';
export declare class OtrosRiesgosService {
    private otrosRiesgosRepository;
    private enfermeriaService;
    constructor(otrosRiesgosRepository: Repository<Otrosriesgos>, enfermeriaService: EnfermeriaService);
    create(createOtrosRiesgoDto: CreateOtrosRiesgoDto): Promise<Otrosriesgos>;
    findAll(): Promise<Otrosriesgos[]>;
    findOne(id: number): Promise<Otrosriesgos>;
    update(id: number, updateOtrosRiesgoDto: UpdateOtrosRiesgoDto): Promise<Otrosriesgos>;
    remove(id: number): Promise<Otrosriesgos>;
}
