import { Test, TestingModule } from '@nestjs/testing';
import { OrganizatorController } from './organizator.controller';

describe('OrganizatorController', () => {
  let controller: OrganizatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizatorController],
    }).compile();

    controller = module.get<OrganizatorController>(OrganizatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
