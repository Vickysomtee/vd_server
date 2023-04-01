import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seminarians } from 'src/entities/seminarian.entities';
import { SeminariansController } from './seminarians.controller';
import { SeminarianService } from './seminarians.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seminarians])],  
  controllers: [SeminariansController],
  providers: [
    {
      provide: 'SEMINARIAN_SERVICE',
      useClass: SeminarianService,
    },
  ],
})
export class SeminariansModule {}
