import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeProfileComponent } from './user-home-profile.component';

describe('UserHomeProfileComponent', () => {
  let component: UserHomeProfileComponent;
  let fixture: ComponentFixture<UserHomeProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHomeProfileComponent]
    });
    fixture = TestBed.createComponent(UserHomeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
