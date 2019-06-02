import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTravelPage } from './display-travel.page';

describe('DisplayTravelPage', () => {
  let component: DisplayTravelPage;
  let fixture: ComponentFixture<DisplayTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTravelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
