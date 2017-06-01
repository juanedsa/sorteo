import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment as ENV } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class UserService {

  public _users: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

  constructor(private http: Http) { }

  get users() {
    return this._users.asObservable();
  }

  getUsers() {
    this.http.get(`${ENV.api.randomuser}?results=100&nat=es`)
      .map((data: any) => data.json())
      .subscribe(users => this._users.next(users.results));
  }

  getRandomUser() {
    const random = this.getRandomInt(0, this._users.getValue().length);
    const userRandom = this._users.getValue()[random];

    this._users.getValue().slice(random, 1);

    return userRandom;
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
