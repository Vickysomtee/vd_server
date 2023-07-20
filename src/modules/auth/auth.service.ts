import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

import { Admins } from '../../entities/admin.entities';
import { RegisterDto, LoginDto } from './dtos/auth.dto';
import { Token } from 'src/types';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Admins)
    private readonly adminRepository: Repository<Admins>,
    private jwtService: JwtService,
  ) {}

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  comparePassword(data: string, hash) {
    return bcrypt.compare(data, hash);
  }

  async register(registerDto: RegisterDto) {
    const admin = await this.adminRepository.findOneBy({
      email: registerDto.email,
    });

    if (admin)
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);

    const hash = await this.hashData(registerDto.password);

    const newAdmin = this.adminRepository.create({
      ...registerDto,
      password: hash,
    });
    const data = await this.adminRepository.save(newAdmin);

    const token = this.jwtService.sign({
      email: newAdmin.email,
      id: newAdmin.id,
    });

    return { message: 'Success', statusCode: HttpStatus.CREATED, token};
  }

  async login(loginDto: LoginDto) {
    const admin = await this.adminRepository.findOneBy({
      email: loginDto.email,
    });

    if (!admin) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const isPassword = await this.comparePassword(
      loginDto.password,
      admin.password,
    );

    if (!isPassword)
      throw new HttpException('Incorrect login details', HttpStatus.FORBIDDEN);

    const token = this.jwtService.sign({
      email: admin.email,
      id: admin.id,
    });

    return { message: 'Success', statusCode: HttpStatus.OK, access_token: token };
  }

  async logout() {}
}
