import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../app/components/login/login.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { MainpageComponent } from '../app/components/mainpage/mainpage.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PartidosComponent } from './components/partidos/partidos.component';

const routes: Routes = [
  // { path: '', component: MainpageComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: MainpageComponent },
  { path: 'partidos', component: PartidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
