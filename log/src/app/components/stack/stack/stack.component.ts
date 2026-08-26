import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'log-stack',
    templateUrl: './stack.component.html',
    changeDetection: ChangeDetectionStrategy.Eager
})
export class StackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
