import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchGrowth } from './launch-growth';

describe('LaunchGrowth', () => {
  let component: LaunchGrowth;
  let fixture: ComponentFixture<LaunchGrowth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchGrowth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchGrowth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
