import { Test, TestingModule } from '@nestjs/testing';
import { DesTimesController } from './des-times.controller';
import { DesTimesService } from './des-times.service';

describe('DesTimesController', () => {
  let controller: DesTimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesTimesController],
      providers: [DesTimesService],
    }).compile();

    controller = module.get<DesTimesController>(DesTimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
