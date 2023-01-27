import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectInvestmentComponent } from './direct-investment.component';

describe('DirectInvestmentComponent', () => {
  let component: DirectInvestmentComponent;
  let fixture: ComponentFixture<DirectInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectInvestmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
