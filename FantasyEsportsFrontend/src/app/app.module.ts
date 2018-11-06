import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginActivate } from '../shared/components/login-activate.component';
import { AuthService } from '../shared/services/auth.service';
import { HttpService } from '../shared/services/http.service';

//Pages
import { LeaguesComponent } from '../pages/leagues/leagues.component';
import { HomeComponent } from '../pages/home/home.component';
import { NotFoundComponent } from '../errorpages/not-found.component';
import { LoginComponent } from '../pages/login/login.component';

//Components
import { TodaysMatchesComponent } from '../pages/home/components/todays-matches/todays-matches.component';
import { PreviousMatchesComponent } from '../pages/home/components/previous-matches/previous-matches.component';
import { NewsComponent } from '../pages/home/components/news/news.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full', canActivate: [LoginActivate]},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [LoginActivate]},
  { path: 'leagues', component: LeaguesComponent, canActivate: [LoginActivate]},
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LeaguesComponent,
    HomeComponent,
    LoginComponent,
    TodaysMatchesComponent,
    PreviousMatchesComponent,
    NewsComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthService,
    HttpService,
    LoginActivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
