import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCategoryComponent } from './investment-category.component';

describe('InvestmentCategoryComponent', () => {
  let component: InvestmentCategoryComponent;
  let fixture: ComponentFixture<InvestmentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
