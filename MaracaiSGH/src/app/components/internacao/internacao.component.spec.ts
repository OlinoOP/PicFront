import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacaoComponent } from './internacao.component';

describe('InternacaoComponent', () => {
  let component: InternacaoComponent;
  let fixture: ComponentFixture<InternacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
