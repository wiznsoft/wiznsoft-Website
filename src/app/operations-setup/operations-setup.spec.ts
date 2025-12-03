import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsSetup } from './operations-setup';

describe('OperationsSetup', () => {
  let component: OperationsSetup;
  let fixture: ComponentFixture<OperationsSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
