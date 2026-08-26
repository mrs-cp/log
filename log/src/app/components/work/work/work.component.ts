import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CatAnimationComponent } from './cat-animation/cat-animation.component';
import { TramNetworkAnimationComponent } from './tram-network-animation/tram-network-animation.component';
import { TramAnimationComponent } from './tram-animation/tram-animation.component';
import { HoudiniAnimationComponent } from './houdini-animation/houdini-animation.component';

@Component({
  selector: 'log-work',
  templateUrl: './work.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [CatAnimationComponent, TramNetworkAnimationComponent, TramAnimationComponent, HoudiniAnimationComponent]
})
export class WorkComponent {

}
