import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work/work.component';
import { CatAnimationComponent } from './work/cat-animation/cat-animation.component';
import { TramAnimationComponent } from './work/tram-animation/tram-animation.component';
import { TramNetworkAnimationComponent } from './work/tram-network-animation/tram-network-animation.component';
import { HoudiniAnimationComponent } from './work/houdini-animation/houdini-animation.component';


@NgModule({
  declarations: [
    WorkComponent,
    CatAnimationComponent,
    TramAnimationComponent,
    TramNetworkAnimationComponent,
    HoudiniAnimationComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
