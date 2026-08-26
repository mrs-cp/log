import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'log-menu-block',
    templateUrl: './menu-block.component.html',
    styleUrls: ['./menu-block.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class MenuBlockComponent {
}
