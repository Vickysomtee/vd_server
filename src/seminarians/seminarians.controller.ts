import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

import { CreateSeminarianDto } from './dtos/CreateSeminarian.dto';
import { SeminarianService } from './seminarians.service';

@Controller('seminarians')
export class SeminariansController {
  constructor(
    @Inject('SEMINARIAN_SERVICE') private seminarianService: SeminarianService,
  ) {}

  @Get()
  getSeminarians(@Query() query) {
    return this.seminarianService.get(query);
  }

  @Get(':id')
  getSeminarian(@Param() param) {
    return this.seminarianService.getOne(param.id)
  }

  @Post('upload_image')
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor('profile_image'))
  uploadSeminarianImage(@UploadedFile() file: Express.Multer.File) {
    return this.seminarianService.uploadImage(file);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSeminarian(@Body() creatSeminarianDto: CreateSeminarianDto) {
    return this.seminarianService.create(creatSeminarianDto);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateSeminarian(@Body() data: CreateSeminarianDto, @Param() params) {
    return this.seminarianService.update(params.id, data)
  }
}
