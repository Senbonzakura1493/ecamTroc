import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BoutiqueServiceService } from './boutique-service.service';

describe('BoutiqueServiceService', () => {
  let service: BoutiqueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(BoutiqueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
