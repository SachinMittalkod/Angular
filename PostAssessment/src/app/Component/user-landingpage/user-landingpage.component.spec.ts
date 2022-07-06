import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLandingpageComponent } from './user-landingpage.component';

describe('UserLandingpageComponent', () => {
  let component: UserLandingpageComponent;
  let fixture: ComponentFixture<UserLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLandingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
