import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuBlockComponent } from './menu-block/menu-block.component';

@Component({
    selector: 'log-main',
    templateUrl: './main.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MenuBlockComponent]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
