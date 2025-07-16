import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { Evaluacion } from './entities/evaluacion.entity';
export declare class EvaluacionController {
    private readonly evaluacionService;
    constructor(evaluacionService: EvaluacionService);
    create(createEvaluacionDto: CreateEvaluacionDto): Promise<Evaluacion>;
    findAll(): Promise<Evaluacion[]>;
    findOne(id: number): Promise<Evaluacion>;
    update(id: number, updateEvaluacionDto: UpdateEvaluacionDto): Promise<Evaluacion>;
    remove(id: number): Promise<void>;
}
