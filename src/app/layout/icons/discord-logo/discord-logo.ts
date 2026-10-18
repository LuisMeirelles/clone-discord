import { Component } from '@angular/core';
import { Icon } from '../icon';

@Component({
  selector: 'app-discord-logo',
  templateUrl: './discord-logo.html',
  styles: [':host { display: flex; justify-content: center; align-items: center }'],
  imports: [Icon],
})
export class DiscordLogo {}
