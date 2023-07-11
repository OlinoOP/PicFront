import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueMedicamentoComponent } from './estoque-medicamento.component';

describe('EstoqueMedicamentoComponent', () => {
  let component: EstoqueMedicamentoComponent;
  let fixture: ComponentFixture<EstoqueMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
