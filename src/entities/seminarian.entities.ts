import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { PastoralDuties } from 'src/seminarians/dtos/PastoralDuties.dto';


@Entity()
export class Seminarians {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'first_name',
    nullable: false,
    default: '',
  })
  first_name: string;

  @Column({
    name: 'last_name',
    nullable: false,
    default: '',
  })
  last_name: string;

  @Column({
    name: 'parish',
    nullable: false,
    default: '',
  })
  parish: string;

  @Column({
    name: 'dob',
    nullable: false,
    default: '',
  })
  dob: string;

  @Column({
    name: 'state_origin',
    nullable: false,
    default: '',
  })
  state_origin: string;

  @Column({
    name: 'admission_year',
    nullable: false,
    default: '',
  })
  admission_year: string;

  @Column({
    name: 'seminary',
    nullable: false,
    default: '',
  })
  seminary: string;

  @Column({
    name: 'class',
    nullable: false,
    default: '',
  })
  class: string;

  @Column({
    name: 'formation_status',
    nullable: true,
    default: '',
  })
  formation_status: string;


  @Column({
    type: 'json',
    name: 'pastorial_duties',
    nullable: true,
  })
  pastoral_duties: PastoralDuties[];

  @Column({
    name: 'profile_image',
    nullable: false,
    default: '',
  })
  profile_image: string;
}
