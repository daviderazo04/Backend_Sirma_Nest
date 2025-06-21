import { Dolorfisio } from 'src/dolor-fisio/entities/dolor-fisio.entity';
import { Equilibriodinamico } from 'src/equilibrio-dinamico/entities/equilibrio-dinamico.entity';
import { Equilibrioestatico } from 'src/equilibrio-estatico/entities/equilibrio-estatico.entity';
// src/fisioterapia/entities/fisioterapia.entity.ts

import { Fuerza } from 'src/fuerza/entities/fuerza.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Tonomuscular } from 'src/tono-muscular/entities/tono-muscular.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('FK_FISIOTER_PACIENTE__PACIENTE', ['idficha'], {})
@Entity('FISIOTERAPIA', { schema: 'Sirma' })
export class Fisioterapia {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IDFISIOTERAPIA' })
  idfisioterapia: number;

  @Column('varchar', { name: 'IDFICHA', length: 6 })
  idficha: string;

  @Column('varchar', {
    name: 'FIS_NOMBREENCUESTADOR',
    nullable: true,
    length: 50,
  })
  fisNombreencuestador: string | null;

  @Column('text', { name: 'FIS_PROBLEMASACTUAL', nullable: true })
  fisProblemasactual: string | null;

  @Column('varchar', { name: 'FIS_MARCHA', nullable: true, length: 15 })
  fisMarcha: string | null;

  @Column('varchar', { name: 'FIS_TRASLADO', nullable: true, length: 30 })
  fisTraslado: string | null;

  @Column('smallint', { name: 'FIS_DOLOR', nullable: true })
  fisDolor: number | null;

  @Column('decimal', { name: 'FIS_PESO', nullable: true })
  fisPeso: number | null;

  @Column('decimal', { name: 'FIS_TALLA', nullable: true })
  fisTalla: number | null;

  @Column('tinyint', { name: 'FIS_DISCAPACIDAD', nullable: true })
  fisDiscapacidad: number | null;

  @OneToMany(() => Dolorfisio, (dolorfisio) => dolorfisio.idfisioterapia2)
  dolorfisios: Dolorfisio[];

  @OneToOne(
    () => Equilibriodinamico,
    (equilibriodinamico) => equilibriodinamico.idfisioterapia2,
  )
  equilibriodinamico: Equilibriodinamico;

  @OneToOne(
    () => Equilibrioestatico,
    (equilibrioestatico) => equilibrioestatico.idfisioterapia2,
  )
  equilibrioestatico: Equilibrioestatico;

  @ManyToOne(() => Paciente, (paciente) => paciente.fisioterapias, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDFICHA', referencedColumnName: 'idficha' }])
  idficha2: Paciente;

  @OneToOne(() => Fuerza, (fuerza) => fuerza.idfisioterapia2)
  fuerza: Fuerza;

  @OneToOne(() => Tonomuscular, (tonomuscular) => tonomuscular.idfisioterapia2)
  tonomuscular: Tonomuscular;
}
