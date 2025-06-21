import { Medicina } from 'src/medicina/entities/medicina.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('ALERTA', { schema: 'Sirma' })
export class Alerta {
  @Column('int', { primary: true, name: 'IDMEDICINA' })
  idmedicina: number;

  @Column('tinyint', { name: 'ALERT_CAIDA', nullable: true, width: 1 })
  alertCaida: boolean | null;

  @Column('tinyint', { name: 'ALERT_DISMOVILIDAD', nullable: true, width: 1 })
  alertDismovilidad: boolean | null;

  @Column('tinyint', { name: 'ALERT_ASTENIA', nullable: true, width: 1 })
  alertAstenia: boolean | null;

  @Column('tinyint', { name: 'ALERT_DESORIENTACION', nullable: true, width: 1 })
  alertDesorientacion: boolean | null;

  @Column('tinyint', { name: 'ALERT_COMPORTAMIENTO', nullable: true, width: 1 })
  alertComportamiento: boolean | null;

  @OneToOne(() => Medicina, (medicina) => medicina.alerta, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDMEDICINA', referencedColumnName: 'idmedicina' }])
  idmedicina2: Medicina;
}
