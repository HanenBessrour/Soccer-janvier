import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';



const routes: Routes = [
  // http://localhost:4200/
  {path:"", component:HomeComponent},
  // http://localhost:4200/signin ==> LoginComponent will be 
  {path: "signin", component: LoginComponent},
  // http://localhost:4200/subscription ==> SignupComponent will be
  {path:"subscription", component:SignupComponent},
  {path:"add-match", component:AddMatchComponent},
  {path:"add-team", component:AddTeamComponent},
  {path:"allmatches", component:MatchesComponent},
  {path:"players", component:PlayersComponent},
  {path:"admin", component:AdminComponent},
 {path:"match-info", component:MatchInfoComponent},
 {path:"player-info", component:PlayerInfoComponent},
 {path:"edit-match/:x", component:EditMatchComponent},
 {path:"search-matches", component:SearchMatchesComponent},
 {path:"weather", component:WeatherComponent},
 {path : "addPlayer" , component: PlayerFormComponent},
 {path : "editPlayer/:id" , component: PlayerFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
