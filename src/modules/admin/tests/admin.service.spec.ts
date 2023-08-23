import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from '../admin.service';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Admins } from '../../../entities/admin.entities';

describe('AdminService', () => {
  let service: AdminService;

  const mockRepository = {
    data: [
      { id: 1, email: 'test1@email.com', password: '' },
      { id: 2, email: 'valid@email.com', password: '' },
    ],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminService,  JwtService,
        {
          provide: getRepositoryToken(Admins),
          useValue: mockRepository
        }],
    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
