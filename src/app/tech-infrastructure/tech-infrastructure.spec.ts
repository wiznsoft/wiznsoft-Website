import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechInfrastructure } from './tech-infrastructure';

describe('TechInfrastructure', () => {
  let component: TechInfrastructure;
  let fixture: ComponentFixture<TechInfrastructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechInfrastructure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechInfrastructure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
