import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamersComponent } from './gamers/gamers.component';
import { HomeComponent } from './home/home.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "tournament", component: TournamentComponent},
  {path: "gamers", component: GamersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
