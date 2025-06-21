import { Fisioterapia } from 'src/fisioterapia/entities/fisioterapia.entity';
import { Zonadolor } from 'src/zonadolor/entities/zonadolor.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('FK_DOLORFIS_RELATIONS_ZONADOLO', ['idzona'], {})
@Index('FK_DOLORFIS_RELATIONS_FISIOTER', ['idfisioterapia'], {})
@Entity('DOLORFISIO', { schema: 'Sirma' })
export class Dolorfisio {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IDDOLORFISIO' })
  iddolorfisio: number;

  @Column('int', { name: 'IDZONA', nullable: true })
  idzona: number | null;

  @Column('int', { name: 'IDFISIOTERAPIA', nullable: true })
  idfisioterapia: number | null;

  @Column('tinyint', { name: 'ZONA_DUELE', nullable: true, width: 1 })
  zonaDuele: boolean | null;

  @ManyToOne(() => Fisioterapia, (fisioterapia) => fisioterapia.dolorfisios, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([
    { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
  ])
  idfisioterapia2: Fisioterapia;

  @ManyToOne(() => Zonadolor, (zonadolor) => zonadolor.dolorfisios, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDZONA', referencedColumnName: 'idzona' }])
  idzona2: Zonadolor;
}
