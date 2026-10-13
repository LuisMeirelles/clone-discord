import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerList } from './layout/server-list/server-list';

@Component({
  imports: [RouterOutlet, ServerList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
