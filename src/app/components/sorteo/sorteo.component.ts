import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Rx';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent implements OnInit {

  private timer = Observable.interval(1000).timeInterval().take(30);
  private timeLeft = 30;
  private initSorteo = false;

  constructor(
    private userService: UserService,
    private playersService: PlayersService
  ) { }

  ngOnInit() {
    this.userService.getUsers();
  }

  private initTimer(): void {
    this.initSorteo = true;
    this.timer.subscribe(time => {
      this.timeLeft -= 1;
      if (time.value % 2 === 0) {
        this.setPlayer();
      }
    });
  }

  private setPlayer() {
    const user = this.userService.getRandomUser();
    this.playersService.addPlayer(user);
  }
}
