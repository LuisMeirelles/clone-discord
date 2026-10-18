import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../../services/chats/chat';
import { AsyncPipe } from '@angular/common';
import { PlusIcon } from '../icons/plus-icon/plus-icon';
import { AvatarWavingIcon } from '../icons/avatar-waving-icon/avatar-waving-icon';
import { TurbineIcon } from '../icons/turbine-icon/turbine-icon';
import { StoreIcon } from '../icons/store-icon/store-icon';
import { LaurelsIcon } from '../icons/laurels-icon/laurels-icon';
import { EllipsisIcon } from '../icons/ellipsis-icon/ellipsis-icon';

@Component({
  imports: [
    AsyncPipe,
    PlusIcon,
    AvatarWavingIcon,
    TurbineIcon,
    StoreIcon,
    LaurelsIcon,
    EllipsisIcon,
  ],
  selector: 'nav[app-dm-list]',
  styleUrl: './dm-list.scss',
  templateUrl: './dm-list.html',
})
export class DmList {
  public chats$: Observable<Chat[]>;
}
