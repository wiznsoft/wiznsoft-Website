import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandMarketing } from './brand-marketing';

describe('BrandMarketing', () => {
  let component: BrandMarketing;
  let fixture: ComponentFixture<BrandMarketing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandMarketing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandMarketing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
