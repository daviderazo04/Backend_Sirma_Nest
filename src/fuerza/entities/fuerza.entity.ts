import { Fisioterapia } from 'src/fisioterapia/entities/fisioterapia.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('FUERZA', { schema: 'Sirma' })
export class Fuerza {
  @Column('int', { primary: true, name: 'IDFISIOTERAPIA' })
  idfisioterapia: number;

  @Column('smallint', { name: 'FUE_BRAZOIZQ', nullable: true })
  fueBrazoizq: number | null;

  @Column('smallint', { name: 'FUE_BRAZODER', nullable: true })
  fueBrazoder: number | null;

  @Column('smallint', { name: 'FUE_PIERNAIZQ', nullable: true })
  fuePiernaizq: number | null;

  @Column('smallint', { name: 'FUE_PIERNADER', nullable: true })
  fuePiernader: number | null;

  @Column('smallint', { name: 'FUE_TRONCOIZQ', nullable: true })
  fueTroncoizq: number | null;

  @Column('smallint', { name: 'FUE_TRONCODER', nullable: true })
  fueTroncoder: number | null;

  @Column('smallint', { name: 'FUE_CUELLOIZQ', nullable: true })
  fueCuelloizq: number | null;

  @Column('smallint', { name: 'FUE_CUELLODER', nullable: true })
  fueCuelloder: number | null;

  @OneToOne(() => Fisioterapia, (fisioterapia) => fisioterapia.fuerza, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([
    { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
  ])
  idfisioterapia2: Fisioterapia;
}
