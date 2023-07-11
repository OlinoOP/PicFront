import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensacaoMedicamentoComponent } from './dispensacao-medicamento.component';

describe('DispensacaoMedicamentoComponent', () => {
  let component: DispensacaoMedicamentoComponent;
  let fixture: ComponentFixture<DispensacaoMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensacaoMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensacaoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
