import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerList } from './layout/server-list/server-list';
import { DmList } from './layout/dm-list/dm-list';

@Component({
  imports: [RouterOutlet, ServerList, DmList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
