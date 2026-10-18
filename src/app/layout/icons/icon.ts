import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'svg[app-icon]',
  styles: [':host { display: block; }'],
  template: '<ng-content />',
  host: {
    'aria-hidden': 'true',
    role: 'img',
    xmlns: 'http://www.w3.org/2000/svg',
    '[attr.width]': 'size()',
    '[attr.height]': 'size()',
    fill: 'none',
    '[attr.viewBox]': '`0 0 ${viewBoxSize()} ${viewBoxSize()}`',
  },
})
export class Icon {
  viewBoxSize = input(24);
  size = input(24);
}
