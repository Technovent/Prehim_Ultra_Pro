import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualListComponent } from './mutual-list.component';

describe('MutualListComponent', () => {
  let component: MutualListComponent;
  let fixture: ComponentFixture<MutualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
