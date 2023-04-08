import { Repository } from 'typeorm';
import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Seminarians } from 'src/entities/seminarian.entities';
import { CreateSeminarianDto } from './dtos/CreateSeminarian.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class SeminarianService {
  constructor(
    @InjectRepository(Seminarians)
    private readonly seminarianRepository: Repository<Seminarians>,
    private cloudinary: CloudinaryService,
  ) {}

  get() {
    return this.seminarianRepository.find();
  }

  async uploadImage(file: Express.Multer.File) {
    const response = await this.cloudinary.uploadImage(file);

    return { status_code: HttpStatus.CREATED, message: 'Success', url: response.secure_url, file_ext: response.format };
  }

  async create(seminarianDTO: CreateSeminarianDto) {
    const seminarian = await this.seminarianRepository.findOneBy({
      email: seminarianDTO.email,
    });
    if (seminarian)
      throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
    const newSeminarian = this.seminarianRepository.create(seminarianDTO);
    const data = await this.seminarianRepository.save(newSeminarian);

    return { message: 'Success', status_code: HttpStatus.CREATED, data };
  }
}
