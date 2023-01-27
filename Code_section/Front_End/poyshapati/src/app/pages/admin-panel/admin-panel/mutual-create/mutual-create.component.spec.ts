import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualCreateComponent } from './mutual-create.component';

describe('MutualCreateComponent', () => {
  let component: MutualCreateComponent;
  let fixture: ComponentFixture<MutualCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
