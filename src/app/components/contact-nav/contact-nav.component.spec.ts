import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNavComponent } from './contact-nav.component';

describe('ContactNavComponent', () => {
  let component: ContactNavComponent;
  let fixture: ComponentFixture<ContactNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactNavComponent]
    });
    fixture = TestBed.createComponent(ContactNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
