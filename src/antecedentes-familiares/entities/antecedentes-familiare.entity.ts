import { Medicina } from 'src/medicina/entities/medicina.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('ANTECEDENTESFAMILIARES', { schema: 'Sirma' })
export class Antecedentesfamiliares {
  @Column('int', { primary: true, name: 'IDMEDICINA' })
  idmedicina: number;

  @Column('tinyint', { name: 'AF_CARDIOPATIAS', nullable: true, width: 1 })
  afCardiopatias: boolean | null;

  @Column('tinyint', { name: 'AF_DIABETES', nullable: true, width: 1 })
  afDiabetes: boolean | null;

  @Column('tinyint', { name: 'AF_HIPERTENSION', nullable: true, width: 1 })
  afHipertension: boolean | null;

  @Column('tinyint', { name: 'AF_NEOPLASIA', nullable: true, width: 1 })
  afNeoplasia: boolean | null;

  @Column('tinyint', { name: 'AF_ALZHEIMER', nullable: true, width: 1 })
  afAlzheimer: boolean | null;

  @Column('tinyint', { name: 'AF_PARKINSON', nullable: true, width: 1 })
  afParkinson: boolean | null;

  @Column('tinyint', { name: 'AF_TUBERCULOSIS', nullable: true, width: 1 })
  afTuberculosis: boolean | null;

  @Column('tinyint', { name: 'AF_VIOLENCIAINTRA', nullable: true, width: 1 })
  afViolenciaintra: boolean | null;

  @Column('tinyint', { name: 'AF_SINDROMECUIDADOR', nullable: true, width: 1 })
  afSindromecuidador: boolean | null;

  @Column('text', { name: 'AF_OBSERVACIONES', nullable: true })
  afObservaciones: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.antecedentesfamiliares, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }])
  idmedicina2: Medicina;
}
