import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admins } from '../../entities/admin.entities';
import { Repository } from 'typeorm';

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
