import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoudiniAnimationComponent } from './houdini-animation.component';

describe('HoudiniAnimationComponent', () => {
  let component: HoudiniAnimationComponent;
  let fixture: ComponentFixture<HoudiniAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoudiniAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoudiniAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
