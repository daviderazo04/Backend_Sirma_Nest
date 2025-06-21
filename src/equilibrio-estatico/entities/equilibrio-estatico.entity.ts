import { Fisioterapia } from 'src/fisioterapia/entities/fisioterapia.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('EQUILIBRIOESTATICO', { schema: 'Sirma' })
export class Equilibrioestatico {
  @Column('int', { primary: true, name: 'IDFISIOTERAPIA' })
  idfisioterapia: number;

  @Column('tinyint', { name: 'EE_SENTADONOAPOYO', nullable: true, width: 1 })
  eeSentadonoapoyo: boolean | null;

  @Column('tinyint', { name: 'EE_PARADONOAPOYO', nullable: true, width: 1 })
  eeParadonoapoyo: boolean | null;

  @OneToOne(
    () => Fisioterapia,
    (fisioterapia) => fisioterapia.equilibrioestatico,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([
    { name: 'IDFISIOTERAPIA', referencedColumnName: 'idfisioterapia' },
  ])
  idfisioterapia2: Fisioterapia;
}
