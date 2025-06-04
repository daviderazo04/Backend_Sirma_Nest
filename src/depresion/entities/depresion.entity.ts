import { Enfermeria } from "src/enfermeria/entities/enfermeria.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("DEPRESION", { schema: "Sirma" })
export class Depresion {
  @Column("int", { primary: true, name: "IDENFERMERIA" })
  idenfermeria: number;

  @Column("tinyint", { name: "DEP_SATISFECHOVIDA", nullable: true, width: 1 })
  depSatisfechovida: boolean | null;

  @Column("tinyint", { name: "DEP_DEJAACTINTERES", nullable: true, width: 1 })
  depDejaactinteres: boolean | null;

  @Column("tinyint", { name: "DEP_VIDAVACIA", nullable: true, width: 1 })
  depVidavacia: boolean | null;

  @Column("tinyint", { name: "DEP_ABURREFRECUENCIA", nullable: true, width: 1 })
  depAburrefrecuencia: boolean | null;

  @Column("tinyint", { name: "DEP_BUENANIMO", nullable: true, width: 1 })
  depBuenanimo: boolean | null;

  @Column("tinyint", { name: "DEP_ALGOMALOSUCEDER", nullable: true, width: 1 })
  depAlgomalosuceder: boolean | null;

  @Column("tinyint", { name: "DEP_FELIZMAYORTIEMPO", nullable: true, width: 1 })
  depFelizmayortiempo: boolean | null;

  @Column("tinyint", { name: "DEP_DESAMPARADO", nullable: true, width: 1 })
  depDesamparado: boolean | null;

  @Column("tinyint", { name: "DEP_ACTIVIDADNUEVA", nullable: true, width: 1 })
  depActividadnueva: boolean | null;

  @Column("tinyint", { name: "DEP_PROBLEMAMEMORIA", nullable: true, width: 1 })
  depProblemamemoria: boolean | null;

  @Column("tinyint", { name: "DEP_MARAVILLOSOVIVIR", nullable: true, width: 1 })
  depMaravillosovivir: boolean | null;

  @Column("tinyint", { name: "DEP_SIENTEINUTIL", nullable: true, width: 1 })
  depSienteinutil: boolean | null;

  @Column("tinyint", { name: "DEP_LLENOENERGIA", nullable: true, width: 1 })
  depLlenoenergia: boolean | null;

  @Column("tinyint", { name: "DEP_SINESPERANZA", nullable: true, width: 1 })
  depSinesperanza: boolean | null;

  @Column("tinyint", { name: "DEP_OTROSMEJORQUEUNO", nullable: true, width: 1 })
  depOtrosmejorqueuno: boolean | null;

  @Column("smallint", { name: "DEP_TOTAL", nullable: true })
  depTotal: number | null;

  @OneToOne(() => Enfermeria, (enfermeria) => enfermeria.depresion, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDENFERMERIA", referencedColumnName: "idenfermeria" }])
  idenfermeria2: Enfermeria;
}
