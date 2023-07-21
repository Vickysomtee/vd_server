import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Seminarians } from '../../entities/seminarian.entities';
import { CreateSeminarianDto } from './dtos/CreateSeminarian.dto';
import { UpdateSeminarianDto } from './dtos/UpdateSeminarian.dto';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';

@Injectable()
export class SeminarianService {
  constructor(
    @InjectRepository(Seminarians)
    private readonly seminarianRepository: Repository<Seminarians>,
    private cloudinary: CloudinaryService,
  ) {}

  get(query) {
    return this.seminarianRepository.find({ where: query });
  }

  async getOne(id: number) {
    const seminarian = await this.seminarianRepository.findOneBy({ id });

    if (!seminarian)
      throw new HttpException(
        'Seminarian does not exist',
        HttpStatus.NOT_FOUND,
      );
    return { message: 'Success', statusCode: HttpStatus.OK, seminarian };
  }

  async findByEmail(email: string) {
    const seminarian = await this.seminarianRepository.findOneBy({ email });

    if (seminarian)
      throw new HttpException(
        'Your details already exists',
        HttpStatus.FORBIDDEN,
      );
  }

  async uploadImage(file: Express.Multer.File) {
    const response = await this.cloudinary.uploadImage(file);

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Success',
      url: response.secure_url,
      file_ext: response.format,
    };
  }

  async create(seminarianDTO: CreateSeminarianDto) {
    const newSeminarian = this.seminarianRepository.create(seminarianDTO);
    const data = await this.seminarianRepository.save(newSeminarian);

    return { message: 'Success', statusCode: HttpStatus.CREATED, data };
  }

  async update(id: number, seminarianDTO: UpdateSeminarianDto) {
    const seminarian = await this.seminarianRepository.findOneBy({ id });

    if (!seminarian)
      throw new HttpException(
        'Seminarian does not exist',
        HttpStatus.NOT_FOUND,
      );

    this.seminarianRepository.merge(seminarian, seminarianDTO);

    const data = await this.seminarianRepository.save(seminarian);

    return { message: 'Success', statusCode: HttpStatus.OK, data };
  }
}
