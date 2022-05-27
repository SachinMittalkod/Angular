import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecartComponent } from './removecart.component';

describe('RemovecartComponent', () => {
  let component: RemovecartComponent;
  let fixture: ComponentFixture<RemovecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovecartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
