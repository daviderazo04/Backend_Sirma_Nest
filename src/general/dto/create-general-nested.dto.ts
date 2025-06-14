import { IsNumber, IsOptional, IsBoolean, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateGeneralNestedDto {

  @IsOptional()
  @IsBoolean()
  genVacunascompletas?: boolean;

  @IsOptional()
  @IsBoolean()
  genHigienecuerpo?: boolean;

  @IsOptional()
  @IsBoolean()
  genControlsalud?: boolean;

  @IsOptional()
  @IsBoolean()
  genHigieneoral?: boolean;

  @IsOptional()
  @IsBoolean()
  genActrecreativa?: boolean;

  @IsOptional()
  @IsBoolean()
  genOtrossaludables?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  genObservaciones?: string;
}