import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { PastoralDuties } from 'src/modules/seminarians/dtos/PastoralDuties.dto';
import { SeminaryDTO } from 'src/modules/seminarians/dtos/Seminary.dto';

@Entity()
export class Seminarians {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    name: 'first_name',
    nullable: false,
  })
  first_name: string;

  @Column({
    name: 'last_name',
    nullable: false,
  })
  last_name: string;

  @Column({
    name: 'parish',
    nullable: false,
  })
  parish: string;

  @Column({
    name: 'email',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'dob',
    nullable: false,
  })
  dob: Date;

  @Column({
    name: 'state_origin',
    nullable: false,
  })
  state_origin: string;

  @Column({
    name: 'admission_year',
    nullable: false,
  })
  admission_year: string;

  @Column({
    type: 'json',
    name: 'seminary',
    nullable: false,
  })
  seminary: SeminaryDTO;

  @Column({
    name: 'seminary_level',
    nullable: false,
  })
  seminary_level: string;

  @Column({
    name: 'current_class',
    nullable: true,
  })
  current_class: string;

  @Column({
    name: 'formation_status',
    nullable: true,
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
  })
  profile_image: string;

  @Column('simple-array', {
    name: 'talent_interest',
    nullable: true,
  })
  talent_interest: string[];

  @Column('simple-array', {
    name: 'certifications',
    nullable: true,
  })
  certifications: string[];
}
