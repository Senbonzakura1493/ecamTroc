import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PropositionService } from './proposition.service';

describe('PropositionService', () => {
  let service: PropositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,RouterModule,HttpClientModule]
    });
    service = TestBed.inject(PropositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
