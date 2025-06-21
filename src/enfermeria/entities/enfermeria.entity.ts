import { Actbasicas } from 'src/act-basicas/entities/act-basica.entity';
import { Actinstrumental } from 'src/act-instrumental/entities/act-instrumental.entity';
import { Cognitivo } from 'src/cognitivo/entities/cognitivo.entity';
import { Depresion } from 'src/depresion/entities/depresion.entity';
import { Otrosriesgos } from 'src/otros-riesgos/entities/otros-riesgo.entity';

import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Recursosocial } from 'src/recurso-social/entities/recurso-social.entity';
import { Tamizaje } from 'src/tamizaje/entities/tamizaje.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('FK_ENFERMER_PACIENTE__PACIENTE', ['idficha'], {})
@Entity('ENFERMERIA', { schema: 'Sirma' })
export class Enfermeria {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IDENFERMERIA' })
  idenfermeria: number;

  @Column('varchar', { name: 'IDFICHA', length: 6 })
  idficha: string;

  @Column('varchar', {
    name: 'ENF_NOMBREENCUESTADOR',
    nullable: true,
    length: 50,
  })
  enfNombreencuestador: string | null;

  @OneToOne(() => Actbasicas, (actbasicas) => actbasicas.idenfermeria2)
  actbasicas: Actbasicas;

  @OneToOne(
    () => Actinstrumental,
    (actinstrumental) => actinstrumental.idenfermeria2,
  )
  actinstrumental: Actinstrumental;

  @OneToOne(() => Cognitivo, (cognitivo) => cognitivo.idenfermeria2)
  cognitivo: Cognitivo;

  @OneToOne(() => Depresion, (depresion) => depresion.idenfermeria2)
  depresion: Depresion;

  @ManyToOne(() => Paciente, (paciente) => paciente.enfermerias, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDFICHA', referencedColumnName: 'idficha' }])
  idficha2: Paciente;

  @OneToOne(() => Otrosriesgos, (otrosriesgos) => otrosriesgos.idenfermeria2)
  otrosriesgos: Otrosriesgos;

  @OneToOne(() => Recursosocial, (recursosocial) => recursosocial.idenfermeria2)
  recursosocial: Recursosocial;

  @OneToOne(() => Tamizaje, (tamizaje) => tamizaje.idenfermeria2)
  tamizaje: Tamizaje;
}
