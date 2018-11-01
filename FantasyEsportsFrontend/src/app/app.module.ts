import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverviewComponent } from '../pages/overview/overview.component';
import { StartComponent } from '../pages/start/start.component';
import { NotFoundComponent } from '../errorpages/not-found.component';
import { LoginComponent } from '../pages/login/login.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'start', component: StartComponent },
  { path: 'overview', component: OverviewComponent },
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
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
