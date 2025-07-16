import { Repository } from 'typeorm';
import { Evaluacion } from './entities/evaluacion.entity';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
export declare class EvaluacionService {
    private readonly evaluacionRepository;
    private readonly nutricionRepository;
    constructor(evaluacionRepository: Repository<Evaluacion>, nutricionRepository: Repository<Nutricion>);
    create(createEvaluacionDto: CreateEvaluacionDto): Promise<Evaluacion>;
    findAll(): Promise<Evaluacion[]>;
    findOne(id: number): Promise<Evaluacion>;
    update(id: number, updateEvaluacionDto: UpdateEvaluacionDto): Promise<Evaluacion>;
    remove(id: number): Promise<{
        affected?: number;
    }>;
}
