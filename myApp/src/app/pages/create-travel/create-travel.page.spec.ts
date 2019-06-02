import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravelPage } from './create-travel.page';

describe('CreateTravelPage', () => {
  let component: CreateTravelPage;
  let fixture: ComponentFixture<CreateTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTravelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
