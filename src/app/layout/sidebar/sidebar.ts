import { Component } from '@angular/core';
import { SidebarItem } from './sidebar-item/sidebar-item';
import { ServersApi } from '../../servers/servers-api';
import { Server } from '../../servers/server';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DiscordLogo } from '../icons/discord-logo/discord-logo';
import { CirclePlusIcon } from '../icons/circle-plus-icon/circle-plus-icon';
import { CompassIcon } from '../icons/compass-icon/compass-icon';

@Component({
  imports: [SidebarItem, AsyncPipe, DiscordLogo, CirclePlusIcon, CompassIcon],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  public servers$: Observable<Server[]>;

  constructor(private readonly serversService: ServersApi) {
    this.servers$ = this.serversService.getAll();
  }
}
