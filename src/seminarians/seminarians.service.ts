import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seminarians } from 'src/entities/seminarian.entities';
import { Repository } from 'typeorm';
import { CreateSeminarianDto } from './dtos/CreateSeminarian.dto';

@Injectable()
export class SeminarianService {
    constructor (
        @InjectRepository(Seminarians)
        private readonly seminarianRepository: Repository<Seminarians>
    ) {}

    get() {
       return this.seminarianRepository.find()
    }

    create(seminarian: CreateSeminarianDto) {
        const newSeminarian = this.seminarianRepository.create(seminarian);
        return this.seminarianRepository.
        save(newSeminarian);
    }

}
