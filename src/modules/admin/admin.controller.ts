import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { UseGuards } from '@nestjs/common';
import { AtGuard } from 'src/common/guards/access_token.guard';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @UseGuards(AtGuard)
  @Get()
  getAdmins() {
    return this.adminService.get();
  }
}
