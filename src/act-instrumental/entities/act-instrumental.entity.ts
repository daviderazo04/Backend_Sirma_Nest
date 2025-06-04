import { Enfermeria } from "src/enfermeria/entities/enfermeria.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("ACTINSTRUMENTAL", { schema: "Sirma" })
export class Actinstrumental {
  @Column("int", { primary: true, name: "IDENFERMERIA" })
  idenfermeria: number;

  @Column("smallint", { name: "AI_CUIDACASA", nullable: true })
  aiCuidacasa: number | null;

  @Column("smallint", { name: "AI_USATELEFONO", nullable: true })
  aiUsatelefono: number | null;

  @Column("smallint", { name: "AI_MEDIOTRANSPORTE", nullable: true })
  aiMediotransporte: number | null;

  @Column("smallint", { name: "AI_PREPARACOMIDA", nullable: true })
  aiPreparacomida: number | null;

  @Column("smallint", { name: "AI_LAVAROPA", nullable: true })
  aiLavaropa: number | null;

  @Column("smallint", { name: "AI_VACOMPRAS", nullable: true })
  aiVacompras: number | null;

  @Column("smallint", { name: "AI_MANEJADINERO", nullable: true })
  aiManejadinero: number | null;

  @Column("smallint", { name: "AI_MANEJAMEDICINA", nullable: true })
  aiManejamedicina: number | null;

  @Column("smallint", { name: "AI_TOTAL", nullable: true })
  aiTotal: number | null;

  @OneToOne(() => Enfermeria, (enfermeria) => enfermeria.actinstrumental, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDENFERMERIA", referencedColumnName: "idenfermeria" }])
  idenfermeria2: Enfermeria;
}
