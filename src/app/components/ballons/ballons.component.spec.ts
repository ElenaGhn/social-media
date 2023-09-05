import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallonsComponent } from './ballons.component';

describe('BallonsComponent', () => {
  let component: BallonsComponent;
  let fixture: ComponentFixture<BallonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BallonsComponent]
    });
    fixture = TestBed.createComponent(BallonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
