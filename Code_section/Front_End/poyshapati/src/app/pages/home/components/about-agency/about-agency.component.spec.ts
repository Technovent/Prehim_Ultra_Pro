import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAgencyComponent } from './about-agency.component';

describe('AboutAgencyComponent', () => {
  let component: AboutAgencyComponent;
  let fixture: ComponentFixture<AboutAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
