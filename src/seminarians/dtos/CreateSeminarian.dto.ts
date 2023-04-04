import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { PastoralDuties } from './PastoralDuties.dto';

export class CreateSeminarianDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  parish: string;

  @IsNotEmpty()
  @IsString()
  dob: string;

  @IsNotEmpty()
  @IsString()
  state_origin: string;

  @IsNotEmpty()
  @IsString()
  admission_year: string;

  @IsNotEmpty()
  @IsString()
  seminary: string;

  @IsNotEmpty()
  @IsString()
  class: string;

  @IsString()
  formation_status: string;

  @IsArray()
  pastoral_duties: PastoralDuties[]
}
