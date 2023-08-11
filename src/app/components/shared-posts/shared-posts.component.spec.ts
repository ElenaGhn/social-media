import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPostsComponent } from './shared-posts.component';

describe('SharedPostsComponent', () => {
  let component: SharedPostsComponent;
  let fixture: ComponentFixture<SharedPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedPostsComponent]
    });
    fixture = TestBed.createComponent(SharedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
