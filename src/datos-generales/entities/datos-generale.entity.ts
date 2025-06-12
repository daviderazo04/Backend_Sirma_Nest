import { Paciente } from "src/paciente/entities/paciente.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("FK_DATOSGEN_PACIENTE__PACIENTE", ["idficha"], {})
@Entity("DATOSGENERALES", { schema: "Sirma" })
export class Datosgenerales {
  @PrimaryGeneratedColumn({ type: "int", name: "IDDATOSGENERALES" })
  iddatosgenerales: number;

    // @Column("varchar", { name: "IDFICHA", length: 6 })
    // idficha: string;

  @Column("varchar", {
    name: "DG_NOMBREENCUESTADOR",
    nullable: true,
    length: 50,
  })
  dgNombreencuestador: string | null;

  @Column("decimal", {
    name: "DG_PAS_ACOSTADO",
    nullable: true,
    comment: "Presión arterial sistólica del paciente mientras está acostado",
    precision: 5,
    scale: 2,
  })
  dgPasAcostado: string | null;

  @Column("decimal", {
    name: "DG_PAD_ACOSTADO",
    nullable: true,
    comment: "Presión arterial diastólica del paciente mientras está acostado",
    precision: 5,
    scale: 2,
  })
  dgPadAcostado: string | null;

  @Column("decimal", {
    name: "DG_PAS_SENTADO",
    nullable: true,
    comment: "Presión arterial sistólica del paciente mientras está sentado",
    precision: 5,
    scale: 2,
  })
  dgPasSentado: string | null;

  @Column("decimal", {
    name: "DG_PAD_SENTADO",
    nullable: true,
    comment: "Presión arterial diastólica del paciente mientras está sentado",
    precision: 5,
    scale: 2,
  })
  dgPadSentado: string | null;

  @Column("text", {
    name: "DG_DIAGNOSTICOHA",
    nullable: true,
    comment: "Diagnóstico sobre la hipertensión arterial del paciente",
  })
  dgDiagnosticoha: string | null;

  @Column("smallint", {
    name: "DG_PULSOPORMIN",
    nullable: true,
    comment: "Pulso por minuto del paciente",
  })
  dgPulsopormin: number | null;

  @Column("text", {
    name: "DG_DIAGNOSTICOPULSO",
    nullable: true,
    comment: "Diagnóstico del pulso",
  })
  dgDiagnosticopulso: string | null;

  @Column("smallint", {
    name: "DG_FRECRESPIRATORIA",
    nullable: true,
    comment: "Frecuencia respiratoria por minuto del paciente ",
  })
  dgFrecrespiratoria: number | null;

  @Column("text", {
    name: "DG_DIAGNOSTICOFR",
    nullable: true,
    comment: "Diagnóstico de la frecuencia respiratoria",
  })
  dgDiagnosticofr: string | null;

  @Column("smallint", {
    name: "DG_SATURACION",
    nullable: true,
    comment: "Saturación en sangre del paciente ",
  })
  dgSaturacion: number | null;

  @Column("text", {
    name: "DG_DIAGNOSTICOSATURACION",
    nullable: true,
    comment: "Diagnóstico de saturación",
  })
  dgDiagnosticosaturacion: string | null;

  @Column("decimal", {
    name: "DG_TEMPERATURA",
    nullable: true,
    comment: "Temperatura en grados celcius del paciente ",
    precision: 3,
    scale: 1,
  })
  dgTemperatura: string | null;

  @Column("text", {
    name: "DG_DIAGNOSTICOTEMPERATURA",
    nullable: true,
    comment: "Diagnóstico de la temperatura",
  })
  dgDiagnosticotemperatura: string | null;

  @Column("tinyint", {
    name: "DG_FIRMACONCENTIMIENTO",
    nullable: true,
    comment:
      "Firma que ratifica el concentimiento del paciente con el uso de sus datos",
    width: 1,
  })
  dgFirmaconcentimiento: boolean | null;

  @Column("tinyint", {
    name: "DG_FIRMAMEDICINA",
    nullable: true,
    comment: "Firma de que fue revisado por medicina",
    width: 1,
  })
  dgFirmamedicina: boolean | null;

  @Column("tinyint", {
    name: "DG_FIRMAENFERMERIA",
    nullable: true,
    comment: "Firma de que fue revisado por enfermería",
    width: 1,
  })
  dgFirmaenfermeria: boolean | null;

  @Column("tinyint", {
    name: "DG_FIRMANUTRICION",
    nullable: true,
    comment: "Firma de que fue revisado por nutrición",
    width: 1,
  })
  dgFirmanutricion: boolean | null;

  @Column("tinyint", { name: "DG_FIRMAFISIOTERAPIA", nullable: true, width: 1 })
  dgFirmafisioterapia: boolean | null;

  @ManyToOne(() => Paciente, (paciente) => paciente.datosgenerales, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "IDFICHA", referencedColumnName: "idficha" }])
  idficha: Paciente;
}
