import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorLayoutComponent } from './coordinator-layout.component';

describe('CoordinatorLayoutComponent', () => {
  let component: CoordinatorLayoutComponent;
  let fixture: ComponentFixture<CoordinatorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
