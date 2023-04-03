import { IsNotEmpty } from 'class-validator';

export class CreateSeminarianDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  parish: string;

  @IsNotEmpty()
  dob: string;

  @IsNotEmpty()
  state_origin: string;

  @IsNotEmpty()
  admission_year: string;

  @IsNotEmpty()
  seminary: string;

  @IsNotEmpty()
  class: string;

  @IsNotEmpty()
  formation_status: string;
}
