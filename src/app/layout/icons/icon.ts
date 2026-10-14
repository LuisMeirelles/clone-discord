import { Component, computed, input } from '@angular/core';
import { IconName, ICONS } from './icons';

@Component({
  imports: [],
  selector: 'app-icon',
  styleUrl: './icon.scss',
  templateUrl: './icon.html',
})
export class Icon {
  name = input.required<IconName>();
  size = input<number>(24);

  protected path = computed(() => ICONS[this.name()]);
}
