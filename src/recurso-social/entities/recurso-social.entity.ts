import { Enfermeria } from 'src/enfermeria/entities/enfermeria.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('RECURSOSOCIAL', { schema: 'Sirma' })
export class Recursosocial {
  @Column('int', { primary: true, name: 'IDENFERMERIA' })
  idenfermeria: number;

  @Column('smallint', { name: 'RS_VIVECON', nullable: true })
  rsVivecon: number | null;

  @Column('smallint', { name: 'RS_CONTACTOSOCIAL', nullable: true })
  rsContactosocial: number | null;

  @Column('smallint', { name: 'RS_APOYORED', nullable: true })
  rsApoyored: number | null;

  @Column('smallint', { name: 'RS_TOTAL', nullable: true })
  rsTotal: number | null;

  @OneToOne(() => Enfermeria, (enfermeria) => enfermeria.recursosocial, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }])
  idenfermeria2: Enfermeria;
}
