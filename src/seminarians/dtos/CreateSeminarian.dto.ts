import { IsArray, IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';
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
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDateString()
  @IsDateString()
  dob: Date;

  @IsNotEmpty()
  @IsString()
  state_origin: string;

  @IsNotEmpty()
  @IsString()
  admission_year: string;

  @IsNotEmpty()
  @IsString()
  seminary: string;

  @IsString()
  seminary_level: string;

  @IsString()
  current_class: string;

  @IsArray()
  pastoral_duties: PastoralDuties[];

  @IsNotEmpty()
  @IsString()
  profile_image: string;

  @IsNotEmpty()
  @IsArray()
  talent_interest: string[];

  @IsNotEmpty()
  @IsArray()
  certifications: string[];
}
