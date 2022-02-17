import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramNetworkAnimationComponent } from './tram-network-animation.component';

describe('TramNetworkAnimationComponent', () => {
  let component: TramNetworkAnimationComponent;
  let fixture: ComponentFixture<TramNetworkAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramNetworkAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramNetworkAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
