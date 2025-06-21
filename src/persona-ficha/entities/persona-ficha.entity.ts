import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Persona } from 'src/persona/entities/persona.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('FK_PERSONA__RELATIONS_PACIENTE', ['idficha'], {})
@Index('FK_PERSONA__RELATIONS_PERSONA', ['idpersona'], {})
@Entity('PERSONA_FICHA', { schema: 'Sirma' })
export class PersonaFicha {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IDPERSONAFICHA' })
  idpersonaficha: number;

  @Column('varchar', { name: 'IDFICHA', nullable: true, length: 6 })
  idficha: string | null;

  @Column('int', { name: 'IDPERSONA', nullable: true })
  idpersona: number | null;

  @ManyToOne(() => Paciente, (paciente) => paciente.personaFichas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDFICHA', referencedColumnName: 'idficha' }])
  idficha2: Paciente;

  @ManyToOne(() => Persona, (persona) => persona.personaFichas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDPERSONA', referencedColumnName: 'idpersona' }])
  idpersona2: Persona;
}
