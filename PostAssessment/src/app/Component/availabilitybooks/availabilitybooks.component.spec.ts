import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitybooksComponent } from './availabilitybooks.component';

describe('AvailabilitybooksComponent', () => {
  let component: AvailabilitybooksComponent;
  let fixture: ComponentFixture<AvailabilitybooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilitybooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilitybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
