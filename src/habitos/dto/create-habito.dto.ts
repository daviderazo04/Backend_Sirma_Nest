import {
  IsNumber,
  IsOptional,
  IsBoolean,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreateHabitoDto {
  /**
   * The ID of the associated Medicina record.
   * This is a mandatory field to link the habits data.
   */
  @IsNotEmpty()
  @IsNumber()
  idmedicina: number;

  /**
   * Indicates if there's a habit of smoking.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  nocTabaquismo?: boolean;

  /**
   * Indicates if there's a habit of alcoholism.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  nocAlcoholismo?: boolean;

  /**
   * Indicates if there are other addictions.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  nocAdicciones?: boolean;

  /**
   * Indicates if there are other harmful habits not specifically listed.
   * Optional boolean field.
   */
  @IsOptional()
  @IsBoolean()
  nocOtros?: boolean;

  /**
   * Observations related to harmful habits.
   * Optional string field with a maximum length of 2000 characters (adjust as needed).
   */
  @IsOptional()
  @IsString()
  @Length(1, 2000)
  nocObservaciones?: string;
}
