import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class PlayersService {

  public _players: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

  constructor() { }

  get players() {
    return this._players.asObservable();
  }

  addPlayer(user) {
    const players = this._players.getValue();

    players.push(user);
    this._players.next(players);
  }

}
