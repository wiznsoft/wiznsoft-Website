import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDevelopment } from './market-development';

describe('MarketDevelopment', () => {
  let component: MarketDevelopment;
  let fixture: ComponentFixture<MarketDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
