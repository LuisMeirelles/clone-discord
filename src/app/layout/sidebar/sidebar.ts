import { Component } from '@angular/core';
import { SidebarItem } from './sidebar-item/sidebar-item';
import { ServersApi } from '../../servers/servers-api';
import { Server } from '../../servers/server';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [SidebarItem, AsyncPipe],
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
