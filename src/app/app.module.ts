import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TournamentComponent } from './tournament/tournament.component';
import { GamersComponent } from './gamers/gamers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournamentComponent,
    GamersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
