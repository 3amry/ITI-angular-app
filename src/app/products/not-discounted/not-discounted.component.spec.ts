import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDiscountedComponent } from './not-discounted.component';

describe('NotDiscountedComponent', () => {
  let component: NotDiscountedComponent;
  let fixture: ComponentFixture<NotDiscountedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotDiscountedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDiscountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
