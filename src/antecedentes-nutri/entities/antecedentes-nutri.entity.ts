import { Nutricion } from "src/nutricion/entities/nutricion.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("ANTECEDENTESNUTRI", { schema: "Sirma" })
export class Antecedentesnutri {
  @Column("int", { primary: true, name: "IDNUTRICION" })
  idnutricion: number;

  @Column("tinyint", { name: "AN_DIETABALANCEADA", nullable: true, width: 1 })
  anDietabalanceada: boolean | null;

  @Column("tinyint", { name: "AN_DENTALESCOMPLETAS", nullable: true, width: 1 })
  anDentalescompletas: boolean | null;

  @Column("tinyint", {
    name: "AN_DIFICULTADMASTICAR",
    nullable: true,
    width: 1,
  })
  anDificultadmasticar: boolean | null;

  @Column("tinyint", {
    name: "AN_ESTRENIMIENTOFRECU",
    nullable: true,
    width: 1,
  })
  anEstrenimientofrecu: boolean | null;

  @Column("tinyint", { name: "AN_DIARREAFRECU", nullable: true, width: 1 })
  anDiarreafrecu: boolean | null;

  @Column("tinyint", {
    name: "AN_ALERGIAALIMENTARIA",
    nullable: true,
    width: 1,
  })
  anAlergiaalimentaria: boolean | null;

  @Column("varchar", { name: "AN_DESAYUNO", nullable: true, length: 80 })
  anDesayuno: string | null;

  @Column("varchar", { name: "AN_ALMUERZO", nullable: true, length: 80 })
  anAlmuerzo: string | null;

  @Column("varchar", { name: "AN_CENA", nullable: true, length: 80 })
  anCena: string | null;

  @Column("varchar", { name: "AN_SNACKS", nullable: true, length: 80 })
  anSnacks: string | null;

  @Column("varchar", { name: "AN_PREFERENCIAS", nullable: true, length: 80 })
  anPreferencias: string | null;

  @Column("varchar", { name: "AN_QUIENCOCINA", nullable: true, length: 80 })
  anQuiencocina: string | null;

  @OneToOne(() => Nutricion, (nutricion) => nutricion.antecedentesnutri, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDNUTRICION", referencedColumnName: "idnutricion" }])
  idnutricion2: Nutricion;
}
