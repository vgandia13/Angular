import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsmovilComponent } from './appsmovil.component';

describe('AppsmovilComponent', () => {
  let component: AppsmovilComponent;
  let fixture: ComponentFixture<AppsmovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsmovilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsmovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
