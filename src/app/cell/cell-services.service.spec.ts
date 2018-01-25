import { TestBed, inject } from '@angular/core/testing';

import { CellServicesService } from './cell-services.service';

describe('CellServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CellServicesService]
    });
  });

  it('should be created', inject([CellServicesService], (service: CellServicesService) => {
    expect(service).toBeTruthy();
  }));
});
