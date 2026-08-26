import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'log-links',
    templateUrl: './links.component.html',
    changeDetection: ChangeDetectionStrategy.Eager
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
