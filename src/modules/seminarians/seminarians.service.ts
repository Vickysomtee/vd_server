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

  async get(query) {
    if (Object.keys(query).includes('seminary_level')) {
      return this.seminarianRepository.find({
        where: query,
        order: { current_class: 'ASC' },
      });
    }

    const spiritual = await this.seminarianRepository.find({
      where: { seminary_level: 'Spiritual Year', ...query },
      order: { current_class: 'ASC' },
    });

    const pastoral = await this.seminarianRepository.find({
      where: { seminary_level: 'Pastoral Year', ...query },
      order: { current_class: 'ASC' },
    });

    const philosophy = await this.seminarianRepository.find({
      where: { seminary_level: 'Philosophy', ...query },
      order: { current_class: 'ASC' },
    });

    const theology = await this.seminarianRepository.find({
      where: { seminary_level: 'Theology', ...query },
      order: { current_class: 'ASC' },
    });

    const seminarians = [...spiritual, ...pastoral, ...philosophy, ...theology];

    return seminarians;
  }

  async verifySeminarian(email: string) {
    const seminarian = await this.seminarianRepository.findOneBy({ email });

    if (seminarian)
      throw new HttpException(
        'Your details already exists',
        HttpStatus.FORBIDDEN,
      );

    return {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'Seminarian not found!',
    };
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
    await this.seminarianRepository.save(newSeminarian);

    return { message: 'Success', statusCode: HttpStatus.CREATED };
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

  async seminaryStats() {
    const allSeminarians = await this.seminarianRepository.find();

    const stjohnotcekpoma = await this.seminarianRepository.find({
      where: { seminary_alias: 'stjohnotcekpoma' },
    });
    const stpetertaeruku = await this.seminarianRepository.find({
      where: { seminary_alias: 'stpetertaeruku' },
    });
    const asuhiele = await this.seminarianRepository.find({
      where: { seminary_alias: 'asuhiele' },
    });
    const stalberttgidowu_offonran = await this.seminarianRepository.find({
      where: { seminary_alias: 'stalberttgidowu-offonran' },
    });
    const ssppbodija = await this.seminarianRepository.find({
      where: { seminary_alias: 'ssppbodija' },
    });
    const pastoral = await this.seminarianRepository.find({
      where: { seminary_level: 'pastoral year' },
    });
    const philosophy = await this.seminarianRepository.find({
      where: { seminary_level: 'philosophy' },
    });
    const spiritual = await this.seminarianRepository.find({
      where: { seminary_level: 'spiritual' },
    });
    const theology = await this.seminarianRepository.find({
      where: { seminary_level: 'theology' },
    });

    // Formation Status

    const active = await this.seminarianRepository.find({
      where: { formation_status: 'active' },
    });

    const probation = await this.seminarianRepository.find({
      where: { seminary_level: 'probation' },
    });

    const leave_of_absence = await this.seminarianRepository.find({
      where: { seminary_level: 'Leave of absence' },
    });

    return {
      allSeminarians: allSeminarians.length,
      stjohnotcekpoma: stjohnotcekpoma.length,
      stpetertaeruku: stpetertaeruku.length,
      asuhiele: asuhiele.length,
      ssppbodija: ssppbodija.length,
      stalberttgidowu_offonran: stalberttgidowu_offonran.length,
      pastoral: pastoral.length,
      philosophy: philosophy.length,
      spiritual: spiritual.length,
      theology: theology.length,
      active_seminarians: active.length,
      probation_seminarians: probation.length,
      leave_of_absence_seminarians: leave_of_absence.length,
    };
  }
}
