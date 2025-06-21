import { Medicina } from 'src/medicina/entities/medicina.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('PATOLOGICO', { schema: 'Sirma' })
export class Patologico {
  @Column('int', { primary: true, name: 'IDMEDICINA' })
  idmedicina: number;

  @Column('tinyint', { name: 'PATO_DERMATOLOGICO', nullable: true, width: 1 })
  patoDermatologico: boolean | null;

  @Column('tinyint', { name: 'PATO_VISUALES', nullable: true, width: 1 })
  patoVisuales: boolean | null;

  @Column('tinyint', { name: 'PATO_OTORRINO', nullable: true, width: 1 })
  patoOtorrino: boolean | null;

  @Column('tinyint', { name: 'PATO_ESTOMATOLOGICOS', nullable: true, width: 1 })
  patoEstomatologicos: boolean | null;

  @Column('tinyint', { name: 'PATO_ENDOCRINOS', nullable: true, width: 1 })
  patoEndocrinos: boolean | null;

  @Column('tinyint', {
    name: 'PATO_CARDIOVASCULARES',
    nullable: true,
    width: 1,
  })
  patoCardiovasculares: boolean | null;

  @Column('tinyint', { name: 'PATO_RESPIRATORIO', nullable: true, width: 1 })
  patoRespiratorio: boolean | null;

  @Column('tinyint', { name: 'PATO_DIGESTIVO', nullable: true, width: 1 })
  patoDigestivo: boolean | null;

  @Column('tinyint', { name: 'PATO_NEUROLOGICO', nullable: true, width: 1 })
  patoNeurologico: boolean | null;

  @Column('tinyint', { name: 'PATO_UROLOGICO', nullable: true, width: 1 })
  patoUrologico: boolean | null;

  @Column('tinyint', { name: 'PATO_HEMOLINFATICO', nullable: true, width: 1 })
  patoHemolinfatico: boolean | null;

  @Column('tinyint', { name: 'PATO_INFECCIOSO', nullable: true, width: 1 })
  patoInfeccioso: boolean | null;

  @Column('tinyint', { name: 'PATO_ONCOLOGICO', nullable: true, width: 1 })
  patoOncologico: boolean | null;

  @Column('tinyint', {
    name: 'PATO_MUSCULOESQUELETICO',
    nullable: true,
    width: 1,
  })
  patoMusculoesqueletico: boolean | null;

  @Column('tinyint', { name: 'PATO_PSIQUIATRICO', nullable: true, width: 1 })
  patoPsiquiatrico: boolean | null;

  @Column('tinyint', { name: 'PATO_QUIRURGICO', nullable: true, width: 1 })
  patoQuirurgico: boolean | null;

  @Column('text', { name: 'PATO_OBSERVACIONES', nullable: true })
  patoObservaciones: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.patologico, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }])
  idmedicina2: Medicina;
}
