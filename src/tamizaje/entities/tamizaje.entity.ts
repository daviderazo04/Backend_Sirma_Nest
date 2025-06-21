import { Enfermeria } from 'src/enfermeria/entities/enfermeria.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
@Entity('TAMIZAJE', { schema: 'Sirma' })
export class Tamizaje {
  @Column('int', { primary: true, name: 'IDENFERMERIA' })
  idenfermeria: number;

  @Column('tinyint', { name: 'TAM_DIFVISUAL', nullable: true, width: 1 })
  tamDifvisual: boolean | null;

  @Column('tinyint', { name: 'TAM_DIFAUDITIVA', nullable: true, width: 1 })
  tamDifauditiva: boolean | null;

  @Column('tinyint', { name: 'TAM_LEVANTEANDA', nullable: true, width: 1 })
  tamLevanteanda: boolean | null;

  @Column('tinyint', { name: 'TAM_PERDIDAORINA', nullable: true, width: 1 })
  tamPerdidaorina: boolean | null;

  @Column('tinyint', { name: 'TAM_PERDIDAPESO', nullable: true, width: 1 })
  tamPerdidapeso: boolean | null;

  @Column('tinyint', { name: 'TAM_PERDIDAMEMORIA', nullable: true, width: 1 })
  tamPerdidamemoria: boolean | null;

  @Column('tinyint', { name: 'TAM_TRISTEDEPRIMIDO', nullable: true, width: 1 })
  tamTristedeprimido: boolean | null;

  @Column('tinyint', { name: 'TAM_BANARSOLO', nullable: true, width: 1 })
  tamBanarsolo: boolean | null;

  @Column('tinyint', { name: 'TAM_COMPRASOLO', nullable: true, width: 1 })
  tamComprasolo: boolean | null;

  @Column('tinyint', { name: 'TAM_VIVESOLO', nullable: true, width: 1 })
  tamVivesolo: boolean | null;

  @Column('smallint', { name: 'TAM_TOTAL', nullable: true })
  tamTotal: number | null;

  @OneToOne(() => Enfermeria, (enfermeria) => enfermeria.tamizaje, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }])
  idenfermeria2: Enfermeria;
}
