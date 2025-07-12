import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('DATOSANTROPOMETRICOS', { schema: 'Sirma' })
export class Datosantropometricos {
  @Column('int', { primary: true, name: 'IDNUTRICION' })
  idnutricion: number;

  @Column('decimal', { name: 'DA_IMC', nullable: true, precision: 4, scale: 2 })
  daImc: string | null;

  @Column('smallint', { name: 'DA_CINTURA', nullable: true })
  daCintura: number | null;

  @Column('smallint', { name: 'DA_CADERA', nullable: true })
  daCadera: number | null;

  @Column('smallint', { name: 'DA_PANTORRILLA', nullable: true })
  daPantorrilla: number | null;

  @Column('smallint', { name: 'DA_BRAZO', nullable: true })
  daBrazo: number | null;

  @Column('decimal', { name: 'DA_TALLA', nullable: true, precision: 3, scale: 2 })
  daTalla: string | null;

  @Column('decimal', { name: 'DA_PESO', nullable: true, precision: 5, scale: 2 })
  daPeso: string | null;

  @OneToOne(() => Nutricion, (nutricion) => nutricion.datosantropometricos, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDNUTRICION', referencedColumnName: 'idnutricion' }])
  idnutricion2: Nutricion;
}
