import { Dolorfisio } from 'src/dolor-fisio/entities/dolor-fisio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ZONADOLOR', { schema: 'Sirma' })
export class Zonadolor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IDZONA' })
  idzona: number;

  @Column('char', { name: 'ZONA_NOMBRE', nullable: true, length: 80 })
  zonaNombre: string | null;

  @OneToMany(() => Dolorfisio, (dolorfisio) => dolorfisio.idzona2)
  dolorfisios: Dolorfisio[];
}
