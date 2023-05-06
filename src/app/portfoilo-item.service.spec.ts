import { TestBed } from '@angular/core/testing';

import { PortfoiloItemService } from './portfoilo-item.service';

describe('PortfoiloItemService', () => {
  let service: PortfoiloItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfoiloItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
