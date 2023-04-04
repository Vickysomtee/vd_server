import { IsArray, IsNotEmpty } from 'class-validator';

import type {PlaceOfDuties} from '../../types/seminarian.type'

export class PastoralDuties {
  @IsNotEmpty()
  seminary: string;

  @IsNotEmpty()
  place_of_duties: PlaceOfDuties[]

}
