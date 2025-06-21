import { Medicina } from 'src/medicina/entities/medicina.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('REVISIONACTUAL', { schema: 'Sirma' })
export class Revisionactual {
  @Column('int', { primary: true, name: 'IDMEDICINA' })
  idmedicina: number;

  @Column('tinyint', { name: 'REVACT_VISION', nullable: true, width: 1 })
  revactVision: boolean | null;

  @Column('tinyint', { name: 'REVACT_AUDICION', nullable: true, width: 1 })
  revactAudicion: boolean | null;

  @Column('tinyint', { name: 'REVACT_OLFATOGUSTO', nullable: true, width: 1 })
  revactOlfatogusto: boolean | null;

  @Column('tinyint', { name: 'REVACT_RESPIRATORIO', nullable: true, width: 1 })
  revactRespiratorio: boolean | null;

  @Column('tinyint', {
    name: 'REVACT_CARDIOVASCULAR',
    nullable: true,
    width: 1,
  })
  revactCardiovascular: boolean | null;

  @Column('tinyint', { name: 'REVACT_DIGESTIVO', nullable: true, width: 1 })
  revactDigestivo: boolean | null;

  @Column('tinyint', { name: 'REVACT_GENITAL', nullable: true, width: 1 })
  revactGenital: boolean | null;

  @Column('tinyint', { name: 'REVACT_URINARIO', nullable: true, width: 1 })
  revactUrinario: boolean | null;

  @Column('tinyint', {
    name: 'REVACT_MUSCULOESQUELETICO',
    nullable: true,
    width: 1,
  })
  revactMusculoesqueletico: boolean | null;

  @Column('tinyint', { name: 'REVACT_ENDOCRINO', nullable: true, width: 1 })
  revactEndocrino: boolean | null;

  @Column('tinyint', { name: 'REVACT_HEMOLINF', nullable: true, width: 1 })
  revactHemolinf: boolean | null;

  @Column('tinyint', { name: 'REVACT_NERVIOSO', nullable: true, width: 1 })
  revactNervioso: boolean | null;

  @Column('tinyint', { name: 'REVACT_METABOLICO', nullable: true, width: 1 })
  revactMetabolico: boolean | null;

  @Column('text', { name: 'REVACT_OBSERVACIONES', nullable: true })
  revactObservaciones: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.revisionactual, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }])
  idmedicina2: Medicina;
}
