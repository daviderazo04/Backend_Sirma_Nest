import { Repository } from 'typeorm';
import { CreateFisioterapiaDto } from './dto/create-fisioterapia.dto';
import { UpdateFisioterapiaDto } from './dto/update-fisioterapia.dto';
import { Fisioterapia } from './entities/fisioterapia.entity';
import { PacienteService } from '../paciente/paciente.service';
export declare class FisioterapiaService {
    private fisioterapiaRepository;
    private pacienteService;
    constructor(fisioterapiaRepository: Repository<Fisioterapia>, pacienteService: PacienteService);
    create(createFisioterapiaDto: CreateFisioterapiaDto): Promise<Fisioterapia>;
    findAll(): Promise<Fisioterapia[]>;
    findOne(id: number): Promise<Fisioterapia>;
    update(id: number, updateFisioterapiaDto: UpdateFisioterapiaDto): Promise<Fisioterapia>;
    remove(id: number): Promise<Fisioterapia>;
    obtenerFisioterapiaCompleta(idFisioterapia: number): Promise<any>;
}
