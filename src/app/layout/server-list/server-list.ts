import { Component } from '@angular/core';
import { SideAvatar } from './side-avatar/side-avatar';
import { ServersService } from './servers.service';
import { Server } from './server';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [SideAvatar, AsyncPipe],
  selector: 'app-server-list',
  styleUrl: './server-list.scss',
  templateUrl: './server-list.html',
})
export class ServerList {
  public servers$: Observable<Server[]>;

  constructor(private readonly serversService: ServersService) {
    this.servers$ = this.serversService.getAll();
  }
}
