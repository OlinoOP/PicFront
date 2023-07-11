import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameSolicitadoComponent } from './exame-solicitado.component';

describe('ExameSolicitadoComponent', () => {
  let component: ExameSolicitadoComponent;
  let fixture: ComponentFixture<ExameSolicitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameSolicitadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExameSolicitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
