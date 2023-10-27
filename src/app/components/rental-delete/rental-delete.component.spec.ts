import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDeleteComponent } from './rental-delete.component';

describe('RentalDeleteComponent', () => {
  let component: RentalDeleteComponent;
  let fixture: ComponentFixture<RentalDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalDeleteComponent]
    });
    fixture = TestBed.createComponent(RentalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
