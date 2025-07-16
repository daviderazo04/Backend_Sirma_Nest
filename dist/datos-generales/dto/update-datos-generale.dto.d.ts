import { CreateDatosGeneraleDto } from './create-datos-generale.dto';
declare const UpdateDatosGeneraleDto_base: import("@nestjs/common").Type<Partial<CreateDatosGeneraleDto>>;
export declare class UpdateDatosGeneraleDto extends UpdateDatosGeneraleDto_base {
    idFicha?: string;
    dgNombreencuestador?: string;
    dgPasAcostado?: string;
    dgPadAcostado?: string;
    dgPasSentado?: string;
    dgPadSentado?: string;
    dgDiagnosticoha?: string;
    dgPulsopormin?: number;
    dgDiagnosticopulso?: string;
    dgFrecrespiratoria?: number;
    dgDiagnosticofr?: string;
    dgSaturacion?: number;
    dgDiagnosticosaturacion?: string;
    dgTemperatura?: string;
    dgDiagnosticotemperatura?: string;
    dgFirmaconcentimiento?: boolean;
    dgFirmamedicina?: boolean;
    dgFirmaenfermeria?: boolean;
    dgFirmanutricion?: boolean;
    dgFirmafisioterapia?: boolean;
}
export {};
