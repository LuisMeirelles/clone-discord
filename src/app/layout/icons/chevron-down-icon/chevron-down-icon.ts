import { Component, input } from '@angular/core';
import { Icon } from '../icon';

@Component({
  selector: 'app-chevron-down-icon',
  templateUrl: './chevron-down-icon.html',
  imports: [Icon],
})
export class ChevronDownIcon {
  size = input(12);
}
