import { IsNotEmpty, IsString } from 'class-validator';


export class SeminaryDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  alias: string;
}
