import { Medicina } from 'src/medicina/entities/medicina.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('DIAGNOSTICO', { schema: 'Sirma' })
export class Diagnostico {
  @Column('int', { primary: true, name: 'IDMEDICINA' })
  idmedicina: number;

  @Column('text', { name: 'DIAG_DIAGNOSTICO', nullable: true })
  diagDiagnostico: string | null;

  @Column('varchar', { name: 'DIAG_PRESUNDEFINI', nullable: true, length: 10 })
  diagPresundefini: string | null;

  @Column('varchar', { name: 'DIAG_CIE', nullable: true, length: 10 })
  diagCie: string | null;

  @Column('varchar', {
    name: 'DIAG_CLINICOCINDROMICO',
    nullable: true,
    length: 10,
  })
  diagClinicocindromico: string | null;

  @OneToOne(() => Medicina, (medicina) => medicina.diagnostico, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }])
  idmedicina2: Medicina;
}
