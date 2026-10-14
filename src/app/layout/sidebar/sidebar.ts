import { Component } from '@angular/core';
import { SidebarItem } from './sidebar-item/sidebar-item';
import { ServersApi } from '../../servers/servers-api';
import { Server } from '../../servers/server';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Icon } from '../icons/icon';

@Component({
  imports: [SidebarItem, AsyncPipe, Icon],
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
