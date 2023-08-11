import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsAboutComponent } from './elements-about.component';

describe('ElementsAboutComponent', () => {
  let component: ElementsAboutComponent;
  let fixture: ComponentFixture<ElementsAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementsAboutComponent]
    });
    fixture = TestBed.createComponent(ElementsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
