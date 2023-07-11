import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitoComponent } from './leito.component';

describe('LeitoComponent', () => {
  let component: LeitoComponent;
  let fixture: ComponentFixture<LeitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
