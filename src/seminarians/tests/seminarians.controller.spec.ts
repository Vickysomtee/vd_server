import { Test, TestingModule } from '@nestjs/testing';
import { SeminariansController } from '../seminarians.controller';

describe('SeminariansController', () => {
  let controller: SeminariansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeminariansController],
    }).compile();

    controller = module.get<SeminariansController>(SeminariansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
