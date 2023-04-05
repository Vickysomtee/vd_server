import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { Seminarians } from 'src/entities/seminarian.entities';
import { SeminariansController } from './seminarians.controller';
import { SeminarianService } from './seminarians.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seminarians]), CloudinaryModule],
  controllers: [SeminariansController],
  providers: [
    {
      provide: 'SEMINARIAN_SERVICE',
      useClass: SeminarianService,
    },
  ],
})
export class SeminariansModule {}
