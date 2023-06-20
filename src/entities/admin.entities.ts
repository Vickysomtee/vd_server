import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Admins {
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
    name: 'email',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
  })
  @Exclude({toPlainOnly: true})
  password: string;

  @Column({
    name: 'position',
    nullable: false,
  })
  position: string;

}
