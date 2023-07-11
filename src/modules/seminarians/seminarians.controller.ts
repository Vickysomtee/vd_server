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
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { AtGuard } from 'src/common/guards/access_token.guard';

import { CreateSeminarianDto } from './dtos/CreateSeminarian.dto';
import { SeminarianService } from './seminarians.service';

@Controller('seminarians')
export class SeminariansController {
  constructor(
    @Inject('SEMINARIAN_SERVICE') private seminarianService: SeminarianService,
  ) {}

  @UseGuards(AtGuard)
  @Get()
  getSeminarians(@Query() query) {
    return this.seminarianService.get(query);
  }

  @UseGuards(AtGuard)
  @Get(':id')
  getSeminarian(@Param() param) {
    return this.seminarianService.getOne(param.id)
  }

  @Public()
  @Post('upload_image')
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor('profile_image'))
  uploadSeminarianImage(@UploadedFile() file: Express.Multer.File) {
    return this.seminarianService.uploadImage(file);
  }

  @Public()
  @Post()
  @UsePipes(ValidationPipe)
  createSeminarian(@Body() creatSeminarianDto: CreateSeminarianDto) {
    return this.seminarianService.create(creatSeminarianDto);
  }

  @UseGuards(AtGuard)
  @Put(':id')
  @UsePipes(ValidationPipe)
  updateSeminarian(@Body() data: CreateSeminarianDto, @Param() params) {
    return this.seminarianService.update(params.id, data)
  }
}
