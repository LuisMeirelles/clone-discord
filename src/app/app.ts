import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerList } from './layout/server-list/server-list';
import { DmList } from './layout/dm-list/dm-list';
import { DiscordLogo } from './layout/icons/discord-logo/discord-logo';
import { MicrophoneIcon } from './layout/icons/microphone-icon/microphone-icon';
import { ChevronDownIcon } from './layout/icons/chevron-down-icon/chevron-down-icon';

@Component({
  imports: [RouterOutlet, ServerList, DmList, DiscordLogo, MicrophoneIcon, ChevronDownIcon],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
