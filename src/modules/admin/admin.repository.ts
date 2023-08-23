import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Admins } from "src/entities/admin.entities";

@Injectable()
export class AdminsRepository extends Repository<Admins> {}