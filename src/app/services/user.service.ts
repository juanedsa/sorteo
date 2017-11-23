import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment as ENV} from '../../environments/environment';


@Injectable()
export class UserService {

  public _users = <Array<any>>([]);

  constructor(private http: Http) {
  }

  getUsers() {
    this.http.get(`${ENV.api.randomuser}?results=100&nat=es`)
      .flatMap((data: any) => data.json().results)
      .map(users => this._users.push(users))
      .subscribe();
  }

  getRandomUser() {
    const random = this.getRandomInt(0, this._users.length);
    const userRandom = this._users[random];
    this._users.slice(random, 1);
    return userRandom;
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
