import { TestBed } from '@angular/core/testing';

import { EstoqueMedicamentoService } from './estoque-medicamento.service';

describe('EstoqueMedicamentoService', () => {
  let service: EstoqueMedicamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueMedicamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
