import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTravelPage } from './modify-travel.page';

describe('ModifyTravelPage', () => {
  let component: ModifyTravelPage;
  let fixture: ComponentFixture<ModifyTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyTravelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
