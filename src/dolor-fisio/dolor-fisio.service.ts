// src/dolor-fisio/dolor-fisio.service.ts
import { forwardRef, Inject, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDolorFisioDto } from './dto/create-dolor-fisio.dto';
import { UpdateDolorFisioDto } from './dto/update-dolor-fisio.dto';
import { Dolorfisio } from './entities/dolor-fisio.entity';
import { FisioterapiaService } from '../fisioterapia/fisioterapia.service'; // Import FisioterapiaService
import { ZonadolorService } from '../zonadolor/zonadolor.service'; // Import ZonadolorService

@Injectable()
export class DolorFisioService {
  constructor(
    @InjectRepository(Dolorfisio)
    private dolorfisioRepository: Repository<Dolorfisio>,
    @Inject(forwardRef(() => FisioterapiaService))
    private fisioterapiaService: FisioterapiaService,
    private zonadolorService: ZonadolorService, // No necesita forwardRef si ZonadolorService no inyecta DolorFisioService
  ) {}

  async create(createDolorFisioDto: CreateDolorFisioDto): Promise<Dolorfisio> {
    const { idfisioterapia, idzona, ...restOfDto } = createDolorFisioDto;

    // 1. Verificar si el registro de Fisioterapia asociado existe
    const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
    if (!fisioterapia) {
      throw new NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
    }

    // 2. Verificar si el registro de ZonaDolor asociado existe
    const zonadolor = await this.zonadolorService.findOne(idzona);
    if (!zonadolor) {
      throw new NotFoundException(`Zona de Dolor con ID ${idzona} no encontrada.`);
    }

    // 3. Opcional: Prevenir duplicados (si una combinación idfisioterapia-idzona debe ser única)
    // Aunque iddolorfisio es PrimaryGeneratedColumn, la combinación de FKs podría ser única.
    // Esto dependerá de tu lógica de negocio: ¿puede una misma zona doler varias veces
    // para la misma ficha de fisioterapia? Si no, añade un UniqueConstraint en la DB
    // y una verificación aquí si TypeORM no lo maneja automáticamente en caso de error.
    // const existingDolorfisio = await this.dolorfisioRepository.findOne({
    //   where: { idfisioterapia: idfisioterapia, idzona: idzona },
    // });
    // if (existingDolorfisio) {
    //   throw new ConflictException(`Ya existe un registro de Dolor Fisio para Fisioterapia ${idfisioterapia} y Zona ${idzona}.`);
    // }

    // 4. Crear el nuevo registro de Dolorfisio
    const dolorfisio = this.dolorfisioRepository.create({
      idfisioterapia: idfisioterapia,
      idzona: idzona,
      idfisioterapia2: fisioterapia, // Asignar la entidad Fisioterapia para la relación
      idzona2: zonadolor,           // Asignar la entidad Zonadolor para la relación
      ...restOfDto,
    });

    return await this.dolorfisioRepository.save(dolorfisio);
  }

  async findAll(): Promise<Dolorfisio[]> {
    return await this.dolorfisioRepository.find({
      relations: ['idfisioterapia2', 'idzona2'], // Cargar ambas relaciones
    });
  }

  async findOne(iddolorfisio: number): Promise<Dolorfisio> {
    const dolorfisio = await this.dolorfisioRepository.findOne({
      where: { iddolorfisio: iddolorfisio },
      relations: ['idfisioterapia2', 'idzona2'], // Cargar ambas relaciones
    });

    if (!dolorfisio) {
      throw new NotFoundException(`Registro de Dolor Fisio con ID ${iddolorfisio} no encontrado.`);
    }

    return dolorfisio;
  }

  async update(iddolorfisio: number, updateDolorFisioDto: UpdateDolorFisioDto): Promise<Dolorfisio> {
    const dolorfisio = await this.dolorfisioRepository.findOne({ where: { iddolorfisio: iddolorfisio } });

    if (!dolorfisio) {
      throw new NotFoundException(`Registro de Dolor Fisio con ID ${iddolorfisio} no encontrado.`);
    }

    // Si se intentan actualizar idfisioterapia o idzona, requerir una validación extra
    // o simplemente no permitirlo si la lógica de negocio dice que son inmutables después de la creación.
    // Por simplicidad, Object.assign los sobrescribirá si están presentes, pero la validación de existencia de FKs
    // no se repite aquí (ya que el DTO Update tiene todo opcional).
    // Si quieres actualizar las FKs, tendrías que validar su existencia de nuevo aquí.
    const { idfisioterapia, idzona, ...restOfDto } = updateDolorFisioDto;

    if (idfisioterapia !== undefined) {
      const fisioterapia = await this.fisioterapiaService.findOne(idfisioterapia);
      if (!fisioterapia) throw new NotFoundException(`Registro de Fisioterapia con ID ${idfisioterapia} no encontrado.`);
      dolorfisio.idfisioterapia = idfisioterapia;
      dolorfisio.idfisioterapia2 = fisioterapia;
    }

    if (idzona !== undefined) {
      const zonadolor = await this.zonadolorService.findOne(idzona);
      if (!zonadolor) throw new NotFoundException(`Zona de Dolor con ID ${idzona} no encontrada.`);
      dolorfisio.idzona = idzona;
      dolorfisio.idzona2 = zonadolor;
    }

    Object.assign(dolorfisio, restOfDto);

    return await this.dolorfisioRepository.save(dolorfisio);
  }

  async remove(iddolorfisio: number): Promise<void> {
    const result = await this.dolorfisioRepository.delete(iddolorfisio);

    if (result.affected === 0) {
      throw new NotFoundException(`Registro de Dolor Fisio con ID ${iddolorfisio} no encontrado.`);
    }
  }

  // --- Método recomendado para 'Fisioterapia Full' ---
  async deleteByFisioterapiaId(idfisioterapia: number): Promise<void> {
    await this.dolorfisioRepository.delete({ idfisioterapia: idfisioterapia });
  }
}