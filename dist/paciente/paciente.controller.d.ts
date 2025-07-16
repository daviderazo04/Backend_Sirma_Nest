import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { InsertarFichaGeneralDTO } from './dto/insertar-ficha-general.dto';
import { FichaGeneralDto } from './dto/ficha-general.dto';
import { FichaGeneralPorCedulaDto } from './dto/ficha-general-por-cedula.dto';
export declare class PacienteController {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    create(createPacienteDto: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    getFichasGenerales(): Promise<FichaGeneralDto[]>;
    findOne(idficha: string): Promise<Paciente>;
    getFichasGeneralesPorCedula(cedula: string): Promise<FichaGeneralPorCedulaDto[]>;
    getFichaByCedula(cedula: string): Promise<any[]>;
    update(idficha: string, updatePacienteDto: UpdatePacienteDto): Promise<Paciente>;
    remove(idficha: string): Promise<void>;
    insertarFichaGeneral(datos: InsertarFichaGeneralDTO): Promise<any>;
}
