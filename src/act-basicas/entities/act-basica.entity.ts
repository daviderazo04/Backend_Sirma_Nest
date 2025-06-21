// src/actbasicas/entities/actbasicas.entity.ts

// Asegúrate de importar todos los decoradores necesarios de TypeORM
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

// ¡¡¡CAMBIO CLAVE: AJUSTAR LA RUTA DE IMPORTACIÓN PARA LA ENTIDAD RELACIONADA!!!
// Enfermeria ahora está en su propio módulo NestJS.
// La ruta es ../<nombre-modulo-relacionado>/entities/<nombre-modulo-relacionado>.entity
import { Enfermeria } from '../../enfermeria/entities/enfermeria.entity';

@Entity('ACTBASICAS', { schema: 'Sirma' })
export class Actbasicas {
  // Mantén el nombre de la clase en PascalCase
  // Esta columna IDENFERMERIA es la clave primaria de esta tabla, y también una clave foránea.
  // Es correcto que se mantenga como Column con primary: true, si no es auto-incrementable.
  @Column('int', { primary: true, name: 'IDENFERMERIA' })
  idenfermeria: number;

  @Column('varchar', { name: 'AB_BANASOLO', nullable: true, length: 13 })
  abBanasolo: string | null;

  @Column('varchar', {
    name: 'AB_VISTEDESVISTESOLO',
    nullable: true,
    length: 13,
  })
  abVistedesvistesolo: string | null;

  @Column('varchar', { name: 'AB_CUIDAAPARIENCIA', nullable: true, length: 13 })
  abCuidaapariencia: string | null;

  @Column('varchar', { name: 'AB_USAINODORO', nullable: true, length: 13 })
  abUsainodoro: string | null;

  @Column('varchar', {
    name: 'AB_CONTROLESFINTERES',
    nullable: true,
    length: 13,
  })
  abControlesfinteres: string | null;

  @Column('varchar', {
    name: 'AB_TRASACUESTALEVANTA',
    nullable: true,
    length: 13,
  })
  abTrasacuestalevanta: string | null;

  @Column('varchar', { name: 'AB_CAMINA', nullable: true, length: 13 })
  abCamina: string | null;

  @Column('varchar', { name: 'AB_ALIMENTA', nullable: true, length: 13 })
  abAlimenta: string | null;

  @Column('smallint', { name: 'AB_TOTAL', nullable: true })
  abTotal: number | null;

  // ¡IMPORTANTE! Asegúrate de que Enfermeria esté correctamente importado arriba.
  @OneToOne(() => Enfermeria, (enfermeria) => enfermeria.actbasicas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'IDENFERMERIA', referencedColumnName: 'idenfermeria' }])
  idenfermeria2: Enfermeria; // El nombre de la propiedad de la relación
}
