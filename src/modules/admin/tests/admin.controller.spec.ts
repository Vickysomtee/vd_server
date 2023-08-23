import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from '../admin.controller';
import { AdminService } from '../admin.service';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Admins } from '../../../entities/admin.entities';

describe('AdminController', () => {
  let controller: AdminController;

  const mockRepository = {
    data: [
      { id: 1, email: 'test1@email.com', password: '' },
      { id: 2, email: 'valid@email.com', password: '' },
    ],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [
        AdminService,
        JwtService,
        {
          provide: getRepositoryToken(Admins),
          useValue: mockRepository,
        },
      ],
    }).compile();

    controller = module.get<AdminController>(AdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
