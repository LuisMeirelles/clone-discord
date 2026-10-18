import { Component, input } from '@angular/core';
import { Icon } from '../icon';

@Component({
  selector: 'app-plus-icon',
  templateUrl: './plus-icon.html',
  imports: [Icon],
})
export class PlusIcon {
  public size = input(24);
}
