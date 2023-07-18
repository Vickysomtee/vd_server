import { IsNotEmpty, IsObject, IsString } from 'class-validator';


export class PastoralDuties {
  @IsNotEmpty()
  @IsString()
  seminary_level: string;

  @IsNotEmpty()
  @IsObject()
  places_of_duties: object;

}
