import { Service } from '@angular/core';
import { Server } from './server';
import { delay, Observable, of } from 'rxjs';

@Service()
export class ServersApi {
  public getAll(): Observable<Server[]> {
    return of([
      { id: 1, name: 'Lorem' },
      { id: 2, name: 'Ipsum' },
      { id: 3, name: 'Dolor' },
      { id: 4, name: 'Sit' },
      { id: 5, name: 'Amet' },
    ]).pipe(delay(500));
  }
}
