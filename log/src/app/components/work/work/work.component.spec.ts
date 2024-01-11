import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkComponent } from './work.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
