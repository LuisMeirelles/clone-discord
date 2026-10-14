import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-side-avatar',
  styleUrl: './side-avatar.scss',
  templateUrl: './side-avatar.html',
})
export class SideAvatar {
  @Input() name: string;
}
