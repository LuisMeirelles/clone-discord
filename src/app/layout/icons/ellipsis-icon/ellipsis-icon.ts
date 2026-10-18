import { Component, input } from '@angular/core';
import { Icon } from '../icon';

@Component({
  selector: 'app-ellipsis-icon',
  templateUrl: './ellipsis-icon.html',
  imports: [Icon],
})
export class EllipsisIcon {
  size = input(24);
}
