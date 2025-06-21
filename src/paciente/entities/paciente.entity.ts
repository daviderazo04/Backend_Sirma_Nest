import { Datosgenerales } from 'src/datos-generales/entities/datos-generale.entity';
import { Enfermeria } from 'src/enfermeria/entities/enfermeria.entity';
import { Fisioterapia } from 'src/fisioterapia/entities/fisioterapia.entity';

import { Medicina } from 'src/medicina/entities/medicina.entity';
import { Nutricion } from 'src/nutricion/entities/nutricion.entity';
import { PersonaFicha } from 'src/persona-ficha/entities/persona-ficha.entity';
import { Seguimientofisioterapia } from 'src/seguimiento-fisioterapia/entities/seguimiento-fisioterapia.entity';
import { Seguimientosalud } from 'src/seguimiento-salud/entities/seguimiento-salud.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('PACIENTE', { schema: 'Sirma' })
export class Paciente {
  @Column('varchar', { primary: true, name: 'IDFICHA', length: 6 })
  idficha: string;

  @Column('date', {
    name: 'PAC_FECHAPRIMERCONTACTO',
    nullable: true,
    comment: 'Fecha del primer contacto con el paciente',
  })
  pacFechaprimercontacto: string | null;

  @Column('varchar', {
    name: 'PAC_ESTADOGENERAL',
    nullable: true,
    comment: 'Estado general de salud del paciente',
    length: 13,
  })
  pacEstadogeneral: string | null;

  @Column('text', {
    name: 'PAC_OBSERVACIONES',
    nullable: true,
    comment: 'Observaciones sobre el estado de salud del paciente',
  })
  pacObservaciones: string | null;

  @OneToMany(() => Datosgenerales, (datosgenerales) => datosgenerales.idficha)
  datosgenerales: Datosgenerales[];

  @OneToMany(() => Enfermeria, (enfermeria) => enfermeria.idficha2)
  enfermerias: Enfermeria[];

  @OneToMany(() => Fisioterapia, (fisioterapia) => fisioterapia.idficha2)
  fisioterapias: Fisioterapia[];

  @OneToMany(() => Medicina, (medicina) => medicina.idficha2)
  medicinas: Medicina[];

  @OneToMany(() => Nutricion, (nutricion) => nutricion.idficha2)
  nutricions: Nutricion[];

  @OneToMany(() => PersonaFicha, (personaFicha) => personaFicha.idficha2)
  personaFichas: PersonaFicha[];

  @OneToMany(
    () => Seguimientofisioterapia,
    (seguimientofisioterapia) => seguimientofisioterapia.idficha2,
  )
  seguimientofisioterapias: Seguimientofisioterapia[];

  @OneToMany(
    () => Seguimientosalud,
    (seguimientosalud) => seguimientosalud.idficha2,
  )
  seguimientosaluds: Seguimientosalud[];
}
