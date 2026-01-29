import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorradoComponent } from './borrado.component';

describe('BorradoComponent', () => {
  let component: BorradoComponent;
  let fixture: ComponentFixture<BorradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
