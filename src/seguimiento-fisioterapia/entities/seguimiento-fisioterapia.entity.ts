import { Paciente } from 'src/paciente/entities/paciente.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('FK_SEGUIMIE_RELATIONS_PACIENTE', ['idficha'], {})
@Entity('SEGUIMIENTOFISIOTERAPIA', { schema: 'Sirma' })
export class Seguimientofisioterapia {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IDSEGUIMIENTOFISIO' })
  idseguimientofisio: number;

  @Column('varchar', { name: 'IDFICHA', nullable: true, length: 6 })
  idficha: string | null;

  @Column('varchar', {
    name: 'SF_NOMBREENCUESTADOR',
    nullable: true,
    length: 50,
  })
  sfNombreencuestador: string | null;

  @Column('date', { name: 'SF_FECHAEVOLUCION', nullable: true })
  sfFechaevolucion: string | null;

  @Column('time', { name: 'SF_HORAEVOLUCION', nullable: true })
  sfHoraevolucion: string | null;

  @Column('text', { name: 'SF_NOTAS', nullable: true })
  sfNotas: string | null;

  @Column('text', { name: 'SF_PREESCRIPCIONES', nullable: true })
  sfPreescripciones: string | null;

  @Column('text', { name: 'SF_MEDICACIONACTUAL', nullable: true })
  sfMedicacionactual: string | null;

  @Column('text', { name: 'SF_OBJETIVOTRATAMIENTO', nullable: true })
  sfObjetivotratamiento: string | null;

  @Column('text', { name: 'SF_INTERVENCIONREALIZADA', nullable: true })
  sfIntervencionrealizada: string | null;

  @Column('text', { name: 'SF_AJUSTEPLANTRATAMIENTO', nullable: true })
  sfAjusteplantratamiento: string | null;

  @Column('text', { name: 'SF_TIEMPOEMPLEADO', nullable: true })
  sfTiempoempleado: string | null;

  @Column('text', { name: 'SF_TECNICAUSADA', nullable: true })
  sfTecnicausada: string | null;

  @Column('text', { name: 'SF_OBSERVACIONES', nullable: true })
  sfObservaciones: string | null;

  @ManyToOne(() => Paciente, (paciente) => paciente.seguimientofisioterapias, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDFICHA', referencedColumnName: 'idficha' }])
  idficha2: Paciente;
}
