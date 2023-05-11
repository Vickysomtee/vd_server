import { Test, TestingModule } from '@nestjs/testing';
import { SeminarianService } from '../seminarians.service';

describe('SeminariansService', () => {
  let service: SeminarianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeminarianService],
    }).compile();

    service = module.get<SeminarianService>(SeminarianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
