import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostProfitableComanyComponent } from './most-profitable-comany.component';

describe('MostProfitableComanyComponent', () => {
  let component: MostProfitableComanyComponent;
  let fixture: ComponentFixture<MostProfitableComanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostProfitableComanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostProfitableComanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
