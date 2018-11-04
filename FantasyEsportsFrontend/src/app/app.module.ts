import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginActivate } from '../shared/components/login-activate.component';
import { AuthService } from '../shared/services/auth.service';

//Pages
import { OverviewComponent } from '../pages/overview/overview.component';
import { StartComponent } from '../pages/start/start.component';
import { NotFoundComponent } from '../errorpages/not-found.component';
import { LoginComponent } from '../pages/login/login.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full', canActivate: [LoginActivate]},
  { path: 'login', component: LoginComponent},
  { path: 'start', component: StartComponent, canActivate: [LoginActivate]},
  { path: 'overview', component: OverviewComponent, canActivate: [LoginActivate]},
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    OverviewComponent,
    StartComponent,
    LoginComponent
  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthService,
    LoginActivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
