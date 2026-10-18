import { Service } from '@angular/core';
import { Chat } from './chat';
import { delay, Observable, of } from 'rxjs';

@Service()
export class ChatApi {
  public getInbox(): Observable<Chat[]> {
    return of([
      { id: 1, username: 'Lorem' },
      { id: 2, username: 'Ipsum' },
      { id: 3, username: 'Dolor' },
      { id: 4, username: 'Sit' },
      { id: 5, username: 'Amet' },
    ]).pipe(delay(500));
  }
}
