import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InsertarFichaGeneralDTO } from './dto/insertar-ficha-general.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return await this.pacienteRepository.save(paciente);
  }

  async findAll(): Promise<Paciente[]> {
    return await this.pacienteRepository.find();
  }

  async findOne(idficha: string): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({
      where: { idficha },
    });
    if (!paciente) {
      throw new NotFoundException(
        `Paciente con ID de ficha "${idficha}" no encontrado.`,
      );
    }
    return paciente;
  }

  async update(
    idficha: string,
    updatePacienteDto: UpdatePacienteDto,
  ): Promise<Paciente> {
    const paciente = await this.findOne(idficha);
    Object.assign(paciente, updatePacienteDto);
    return await this.pacienteRepository.save(paciente);
  }

  async remove(idficha: string): Promise<void> {
    const result = await this.pacienteRepository.delete(idficha);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Paciente con ID de ficha "${idficha}" no encontrado.`,
      );
    }
  }

  async insertarFichaGeneral(
    datos: InsertarFichaGeneralDTO,
  ): Promise<unknown[]> {
    const {
      p_IDFICHA,
      p_FECHAPRIMERCONTACTO,
      p_ESTADOGENERAL,
      p_OBSERVACIONES,
      p_IDPERSONA,
      p_NOMBREENCUESTADOR,
      p_PAS_ACOSTADO,
      p_PAD_ACOSTADO,
      p_PAS_SENTADO,
      p_PAD_SENTADO,
      p_DIAGNOSTICOHA,
      p_PULSOPORMIN,
      p_DIAGNOSTICOPULSO,
      p_FRECRESPIRATORIA,
      p_DIAGNOSTICOFR,
      p_SATURACION,
      p_DIAGNOSTICOSATURACION,
      p_TEMPERATURA,
      p_DIAGNOSTICOTEMPERATURA,
    } = datos;

    const result: unknown[] = await this.pacienteRepository.query(
      'CALL InsertarFichaGeneral(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        p_IDFICHA,
        p_FECHAPRIMERCONTACTO,
        p_ESTADOGENERAL,
        p_OBSERVACIONES,
        p_IDPERSONA,
        p_NOMBREENCUESTADOR,
        p_PAS_ACOSTADO,
        p_PAD_ACOSTADO,
        p_PAS_SENTADO,
        p_PAD_SENTADO,
        p_DIAGNOSTICOHA,
        p_PULSOPORMIN,
        p_DIAGNOSTICOPULSO,
        p_FRECRESPIRATORIA,
        p_DIAGNOSTICOFR,
        p_SATURACION,
        p_DIAGNOSTICOSATURACION,
        p_TEMPERATURA,
        p_DIAGNOSTICOTEMPERATURA,
      ],
    );

    return result;
  }
  async getPacienteByIdficha(cedula: string): Promise<string[]> {
    interface FichaRow {
      idficha?: string;
      idFicha?: string;
      [key: string]: unknown;
    }

    const result: unknown[] = await this.pacienteRepository.query(
      'CALL obtener_ficha_por_cedula(?)',
      [cedula],
    );

    // Dependiendo del driver y cómo retorna el procedimiento, puede ser result[0] o result
    const rows: FichaRow[] = Array.isArray(result[0])
      ? (result[0] as FichaRow[])
      : (result as FichaRow[]);

    if (!rows || rows.length === 0) {
      throw new NotFoundException(
        `No se encontró ficha para la cédula ${cedula}`,
      );
    }

    // Asegúrate de que el campo sea el correcto según tu SP, por ejemplo: row.idficha o row.idFicha
    const fichas: string[] = rows
      .map((row) => row.idficha ?? row.idFicha)
      .filter((id): id is string => typeof id === 'string');

    return fichas;
  }
}
