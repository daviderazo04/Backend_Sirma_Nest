import { Medicina } from 'src/medicina/entities/medicina.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('EXAMENREGIONAL', { schema: 'Sirma' })
export class Examenregional {
  @Column('int', { primary: true, name: 'IDMEDICINA' })
  idmedicina: number;

  @Column('tinyint', { name: 'EXR_PIEL', nullable: true, width: 1 })
  exrPiel: boolean | null;

  @Column('tinyint', { name: 'EXR_CABEZA', nullable: true, width: 1 })
  exrCabeza: boolean | null;

  @Column('tinyint', { name: 'EXR_OJOS', nullable: true, width: 1 })
  exrOjos: boolean | null;

  @Column('tinyint', { name: 'EXR_OIDOS', nullable: true, width: 1 })
  exrOidos: boolean | null;

  @Column('tinyint', { name: 'EXR_BOCA', nullable: true, width: 1 })
  exrBoca: boolean | null;

  @Column('tinyint', { name: 'EXR_NARIZ', nullable: true, width: 1 })
  exrNariz: boolean | null;

  @Column('tinyint', { name: 'EXR_CUELLO', nullable: true, width: 1 })
  exrCuello: boolean | null;

  @Column('tinyint', { name: 'EXR_AXILAMAMA', nullable: true, width: 1 })
  exrAxilamama: boolean | null;

  @Column('tinyint', { name: 'EXR_TORAX', nullable: true, width: 1 })
  exrTorax: boolean | null;

  @Column('tinyint', { name: 'EXR_ABDOMEN', nullable: true, width: 1 })
  exrAbdomen: boolean | null;

  @Column('tinyint', { name: 'EXR_COLUMNA', nullable: true, width: 1 })
  exrColumna: boolean | null;

  @Column('tinyint', { name: 'EXR_PERINE', nullable: true, width: 1 })
  exrPerine: boolean | null;

  @Column('tinyint', { name: 'EXR_MIEMBROSSUPER', nullable: true, width: 1 })
  exrMiembrossuper: boolean | null;

  @Column('tinyint', { name: 'EXR_MIEMBROSINFER', nullable: true, width: 1 })
  exrMiembrosinfer: boolean | null;

  @OneToOne(() => Medicina, (medicina) => medicina.examenregional, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }])
  idmedicina2: Medicina;
}
