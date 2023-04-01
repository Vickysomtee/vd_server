import { Test, TestingModule } from '@nestjs/testing';
import { SeminariansService } from './seminarians.service';

describe('SeminariansService', () => {
  let service: SeminariansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeminariansService],
    }).compile();

    service = module.get<SeminariansService>(SeminariansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
