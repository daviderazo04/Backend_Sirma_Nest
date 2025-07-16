import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InsertarFichaGeneralDTO } from './dto/insertar-ficha-general.dto';
import { FichaGeneralDto } from './dto/ficha-general.dto';
import { FichaGeneralPorCedulaDto } from './dto/ficha-general-por-cedula.dto';
export declare class PacienteService {
    private readonly pacienteRepository;
    constructor(pacienteRepository: Repository<Paciente>);
    create(createPacienteDto: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(idficha: string): Promise<Paciente>;
    update(idficha: string, updatePacienteDto: UpdatePacienteDto): Promise<Paciente>;
    remove(idficha: string): Promise<void>;
    insertarFichaGeneral(datos: InsertarFichaGeneralDTO): Promise<unknown[]>;
    getPacienteByIdficha(cedula: string): Promise<any[]>;
    obtenerFichasGenerales(): Promise<FichaGeneralDto[]>;
    obtenerFichasPorCedula(cedula: string): Promise<FichaGeneralPorCedulaDto[]>;
}
