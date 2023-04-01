import { Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { CreateSeminarianDto } from './dtos/CreateSeminarian.dto';
import { SeminarianService } from './seminarians.service';

@Controller('seminarians')
export class SeminariansController {
    constructor(@Inject('SEMINARIAN_SERVICE') private seminarianService: SeminarianService) {}

    @Get()
    getSeminarians() {
        return this.seminarianService.get();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createSeminarian(@Body() creatSeminarianDto: CreateSeminarianDto) {
        return this.seminarianService.create(creatSeminarianDto)
    }
}
