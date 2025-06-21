import { PartialType } from '@nestjs/swagger';
import { CreateDatosGeneraleDto } from './create-datos-generale.dto';
import {
  IsString,
  IsOptional,
  IsDecimal,
  Length,
  IsInt,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';
export class UpdateDatosGeneraleDto extends PartialType(
  CreateDatosGeneraleDto,
) {
  @IsNotEmpty()
  @IsString()
  @Length(1, 6)
  idFicha?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  dgNombreencuestador?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  dgPasAcostado?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  dgPadAcostado?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  dgPasSentado?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,2' })
  dgPadSentado?: string;

  @IsOptional()
  @IsString()
  dgDiagnosticoha?: string;

  @IsOptional()
  @IsInt()
  dgPulsopormin?: number;

  @IsOptional()
  @IsString()
  dgDiagnosticopulso?: string;

  @IsOptional()
  @IsInt()
  dgFrecrespiratoria?: number;

  @IsOptional()
  @IsString()
  dgDiagnosticofr?: string;

  @IsOptional()
  @IsInt()
  dgSaturacion?: number;

  @IsOptional()
  @IsString()
  dgDiagnosticosaturacion?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '0,1' })
  dgTemperatura?: string;

  @IsOptional()
  @IsString()
  dgDiagnosticotemperatura?: string;

  @IsOptional()
  @IsBoolean()
  dgFirmaconcentimiento?: boolean;

  @IsOptional()
  @IsBoolean()
  dgFirmamedicina?: boolean;

  @IsOptional()
  @IsBoolean()
  dgFirmaenfermeria?: boolean;

  @IsOptional()
  @IsBoolean()
  dgFirmanutricion?: boolean;

  @IsOptional()
  @IsBoolean()
  dgFirmafisioterapia?: boolean;
}
