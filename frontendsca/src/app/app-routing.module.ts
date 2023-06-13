import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../app/components/login/login.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { MainpageComponent } from '../app/components/mainpage/mainpage.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PartidosComponent } from './components/partidos/partidos.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { EquiposComponent } from './components/equipos/equipos.component';
import { TacticsComponent } from './components/tactics/tactics.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';

const routes: Routes = [
  // { path: '', component: MainpageComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: MainpageComponent},
  { path: 'partidos', component: PartidosComponent},
  { path: 'equipos', component: EquiposComponent},
  { path: 'tactics', component: TacticsComponent},
  { path: 'settings', component: AjustesComponent}, 
  { path: 'contact', component: InformacionComponent}, 
  { path: 'opiniones', component: OpinionesComponent}

  /*{ path: 'home', component: MainpageComponent, ...canActivate( () => redirectUnauthorizedTo(['/login'])) },
  { path: 'partidos', component: PartidosComponent, ...canActivate( () => redirectUnauthorizedTo(['/login']))}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
