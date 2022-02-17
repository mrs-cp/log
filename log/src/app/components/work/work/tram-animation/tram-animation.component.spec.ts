import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramAnimationComponent } from './tram-animation.component';

describe('TramAnimationComponent', () => {
  let component: TramAnimationComponent;
  let fixture: ComponentFixture<TramAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
