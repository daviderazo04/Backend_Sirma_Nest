import { Fisioterapia } from 'src/fisioterapia/entities/fisioterapia.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('EQUILIBRIODINAMICO', { schema: 'Sirma' })
export class Equilibriodinamico {
  @Column('int', { primary: true, name: 'IDFISIOTERAPIA' })
  idfisioterapia: number;

  @Column('tinyint', { name: 'ED_LEVANTARSE', nullable: true, width: 1 })
  edLevantarse: boolean | null;

  @Column('tinyint', { name: 'ED_PASOCONTINUO', nullable: true, width: 1 })
  edPasocontinuo: boolean | null;

  @Column('tinyint', { name: 'ED_LONGPASO', nullable: true, width: 1 })
  edLongpaso: boolean | null;

  @Column('tinyint', { name: 'ED_PASOELEVADO', nullable: true, width: 1 })
  edPasoelevado: boolean | null;

  @Column('tinyint', { name: 'ED_ROTACIONTRONCO', nullable: true, width: 1 })
  edRotaciontronco: boolean | null;

  @Column('tinyint', { name: 'ED_PASOFINAL', nullable: true, width: 1 })
  edPasofinal: boolean | null;

  @OneToOne(
    () => Fisioterapia,
    (fisioterapia) => fisioterapia.equilibriodinamico,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([
    { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
  ])
  idfisioterapia2: Fisioterapia;
}
