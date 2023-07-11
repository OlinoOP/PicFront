import { TestBed } from '@angular/core/testing';

import { DispensacaoMedicamentoService } from './dispensacao-medicamento.service';

describe('DispensacaoMedicamentoService', () => {
  let service: DispensacaoMedicamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensacaoMedicamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
