import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeLayoutComponent } from './relative-layout.component';

describe('RelativeLayoutComponent', () => {
  let component: RelativeLayoutComponent;
  let fixture: ComponentFixture<RelativeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelativeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
