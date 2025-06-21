import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
@Entity('EVALUACION', { schema: 'Sirma' })
export class Evaluacion {
  @Column('int', { primary: true, name: 'IDNUTRICION' })
  idnutricion: number;

  @Column('smallint', { name: 'EVA_VIVEDOMICILIO', nullable: true })
  evaVivedomicilio: number | null;

  @Column('smallint', { name: 'EVA_MASTRESMEDICINAS', nullable: true })
  evaMastresmedicinas: number | null;

  @Column('smallint', { name: 'EVA_ULCERALESIONCUTANEA', nullable: true })
  evaUlceralesioncutanea: number | null;

  @Column('smallint', { name: 'EVA_COMIDACOMPLETA', nullable: true })
  evaComidacompleta: number | null;

  @Column('decimal', {
    name: 'EVA_CONSUMEPACIENTE',
    nullable: true,
    precision: 2,
    scale: 1,
  })
  evaConsumepaciente: string | null;

  @Column('smallint', { name: 'EVA_FRUTAVERDURA', nullable: true })
  evaFrutaverdura: number | null;

  @Column('decimal', {
    name: 'EVA_VASOSAGUA',
    nullable: true,
    precision: 2,
    scale: 1,
  })
  evaVasosagua: string | null;

  @Column('smallint', { name: 'EVA_FORMAALIMENTO', nullable: true })
  evaFormaalimento: number | null;

  @Column('smallint', { name: 'EVA_BIENNUTRIDO', nullable: true })
  evaBiennutrido: number | null;

  @Column('decimal', {
    name: 'EVA_ESTADOSALUD',
    nullable: true,
    precision: 2,
    scale: 1,
  })
  evaEstadosalud: string | null;

  @Column('decimal', {
    name: 'EVA_CIRCUNBRAQUIAL',
    nullable: true,
    precision: 2,
    scale: 1,
  })
  evaCircunbraquial: string | null;

  @Column('smallint', { name: 'EVA_CIRCUNPANTORRILLA', nullable: true })
  evaCircunpantorrilla: number | null;

  @Column('smallint', { name: 'EVA_TOTAL', nullable: true })
  evaTotal: number | null;

  @OneToOne(() => Nutricion, (nutricion) => nutricion.evaluacion, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDNUTRICION', referencedColumnName: 'idnutricion' }])
  idnutricion2: Nutricion;
}
