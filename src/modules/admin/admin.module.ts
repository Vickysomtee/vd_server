import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admins } from 'src/entities/admin.entities';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([Admins])],
  exports: [AdminService, TypeOrmModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
