import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admins } from 'src/entities/admin.entities';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dtos/CreateAdmin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admins)
    private readonly adminRepository: Repository<Admins>,
  ) {}

  async get() {
    return this.adminRepository.find();
  }
}
