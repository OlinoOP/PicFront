import { TestBed } from '@angular/core/testing';

import { LeitoService } from './leito.service';

describe('LeitoService', () => {
  let service: LeitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
