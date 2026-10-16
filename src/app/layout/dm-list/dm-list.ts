import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../../services/chats/chat';
import { AsyncPipe } from '@angular/common';
import { PlusIcon } from '../icons/plus-icon/plus-icon';

@Component({
  imports: [AsyncPipe, PlusIcon],
  selector: 'nav[app-dm-list]',
  styleUrl: './dm-list.scss',
  templateUrl: './dm-list.html',
})
export class DmList {
  public chats$: Observable<Chat[]>;
}
