// src/farmacologico/dto/create-farmacologico.dto.ts
import {
  IsNumber,
  IsOptional,
  IsBoolean,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreateFarmacologicoNestedDto {
  @IsOptional()
  @IsBoolean()
  farAines?: boolean;

  @IsOptional()
  @IsBoolean()
  farAnalgesicos?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 10)
  farAntidiabeticos?: string;

  @IsOptional()
  @IsBoolean()
  farAntihipertensivos?: boolean;

  @IsOptional()
  @IsBoolean()
  farAnticoagulantes?: boolean;

  @IsOptional()
  @IsBoolean()
  farPsicofarmacos?: boolean;

  @IsOptional()
  @IsBoolean()
  farAntibioticos?: boolean;

  @IsOptional()
  @IsBoolean()
  farAlergias?: boolean;

  @IsOptional()
  @IsBoolean()
  farEfectosadversos?: boolean;

  @IsOptional()
  @IsBoolean()
  farPoliprescriptor?: boolean;

  @IsOptional()
  @IsBoolean()
  farPolifarmacia?: boolean;

  @IsOptional()
  @IsBoolean()
  farOtros?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  farObservaciones?: string;
}
