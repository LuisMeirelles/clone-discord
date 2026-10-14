import { Component } from '@angular/core';
import { SideAvatar } from './side-avatar/side-avatar';
import { ServersApi } from '../../servers/servers-api';
import { Server } from '../../servers/server';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [SideAvatar, AsyncPipe],
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
