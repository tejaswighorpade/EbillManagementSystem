import { TestBed } from '@angular/core/testing';

import { CsrserviceService } from './csrservice.service';

describe('CsrserviceService', () => {
  let service: CsrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
