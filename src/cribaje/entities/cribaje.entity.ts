import { Nutricion } from "src/nutricion/entities/nutricion.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("CRIBAJE", { schema: "Sirma" })
export class Cribaje {
  @Column("int", { primary: true, name: "IDNUTRICION" })
  idnutricion: number;

  @Column("smallint", { name: "CRI_PERDIDAAPETITO", nullable: true })
  criPerdidaapetito: number | null;

  @Column("smallint", { name: "CRI_PERDIDAPESO", nullable: true })
  criPerdidapeso: number | null;

  @Column("smallint", { name: "CRI_MOVILIDAD", nullable: true })
  criMovilidad: number | null;

  @Column("smallint", { name: "CRI_ENFERMEDADAGUDA", nullable: true })
  criEnfermedadaguda: number | null;

  @Column("smallint", { name: "CRI_NEUROPSICO", nullable: true })
  criNeuropsico: number | null;

  @Column("smallint", { name: "CRI_IMC", nullable: true })
  criImc: number | null;

  @Column("smallint", { name: "CRI_TOTALES", nullable: true })
  criTotales: number | null;

  @OneToOne(() => Nutricion, (nutricion) => nutricion.cribaje, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDNUTRICION", referencedColumnName: "idnutricion" }])
  idnutricion2: Nutricion;
}
