import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlanning } from './business-planning';

describe('BusinessPlanning', () => {
  let component: BusinessPlanning;
  let fixture: ComponentFixture<BusinessPlanning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPlanning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPlanning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
