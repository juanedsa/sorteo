import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SorteoComponent } from './components/sorteo/sorteo.component';
import { UserService } from './services/user.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import { PlayersService } from './services/players.service';
import { PlayersListComponent } from './components/players-list/players-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SorteoComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
