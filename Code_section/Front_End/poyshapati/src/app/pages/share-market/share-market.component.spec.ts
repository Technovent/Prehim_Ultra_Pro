import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMarketComponent } from './share-market.component';

describe('ShareMarketComponent', () => {
  let component: ShareMarketComponent;
  let fixture: ComponentFixture<ShareMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
