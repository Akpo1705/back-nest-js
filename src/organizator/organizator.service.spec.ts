import { Test, TestingModule } from '@nestjs/testing';
import { OrganizatorService } from './organizator.service';

describe('OrganizatorService', () => {
  let service: OrganizatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizatorService],
    }).compile();

    service = module.get<OrganizatorService>(OrganizatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
