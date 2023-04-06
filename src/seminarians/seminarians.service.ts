import { Repository } from 'typeorm';
import { BadGatewayException, Injectable } from '@nestjs/common';
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
    const response = await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadGatewayException('Invalid file type.');
    });

    return {url: response.secure_url, file_ext: response.format}
  }

  async create(seminarian: CreateSeminarianDto) {
    const newSeminarian = this.seminarianRepository.create(seminarian);
    return this.seminarianRepository.save(newSeminarian);
  }
}
