import {
  IsNumber,
  IsOptional,
  IsBoolean,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreateHabitoNestedDto {
  @IsOptional()
  @IsBoolean()
  nocTabaquismo?: boolean;

  @IsOptional()
  @IsBoolean()
  nocAlcoholismo?: boolean;

  @IsOptional()
  @IsBoolean()
  nocAdicciones?: boolean;

  @IsOptional()
  @IsBoolean()
  nocOtros?: boolean;

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  nocObservaciones?: string;
}
