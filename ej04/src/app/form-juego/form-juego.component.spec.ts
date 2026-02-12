import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJuegoComponent } from './form-juego.component';

describe('FormJuegoComponent', () => {
  let component: FormJuegoComponent;
  let fixture: ComponentFixture<FormJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormJuegoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
