import { IsArray, IsDateString, IsEmail, IsObject, IsOptional, IsString } from 'class-validator';
import { PastoralDuties } from './PastoralDuties.dto';
import { SeminaryDTO } from './Seminary.dto';

export class UpdateSeminarianDto {
  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsOptional()
  @IsString()
  parish: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsDateString()
  @IsDateString()
  dob: Date;

  @IsOptional()
  @IsString()
  state_origin: string;

  @IsOptional()
  @IsString()
  admission_year: string;

  @IsOptional()
  @IsObject()
  seminary: SeminaryDTO;

  @IsOptional()
  @IsString()
  seminary_level: string;
  
  @IsOptional()
  @IsString()
  current_class: string;
  
  @IsOptional()
  @IsArray()
  pastoral_duties: PastoralDuties[];

  @IsOptional()
  @IsString()
  profile_image: string;

  @IsOptional()
  @IsArray()
  talent_interest: string[];

  @IsOptional()
  @IsArray()
  certifications: string[];
}
