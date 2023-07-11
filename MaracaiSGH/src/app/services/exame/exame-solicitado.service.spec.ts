import { TestBed } from '@angular/core/testing';

import { ExameSolicitadoService } from './exame-solicitado.service';

describe('ExameSolicitadoService', () => {
  let service: ExameSolicitadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExameSolicitadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
