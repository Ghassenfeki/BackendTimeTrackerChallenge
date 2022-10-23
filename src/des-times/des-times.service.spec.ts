import { Test, TestingModule } from '@nestjs/testing';
import { DesTimesService } from './des-times.service';

describe('DesTimesService', () => {
  let service: DesTimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesTimesService],
    }).compile();

    service = module.get<DesTimesService>(DesTimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
