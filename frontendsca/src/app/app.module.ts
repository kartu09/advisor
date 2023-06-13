import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { LoginComponent } from './components/login/login.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatchTableComponent } from './components/match-table/match-table.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { TacticsComponent } from './components/tactics/tactics.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { GridIconComponent } from './components/grid-icon/grid-icon.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';


// import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FooterComponent,
    MainmenuComponent,
    MainCarouselComponent,
    SideMenuComponent,
    LoginComponent,
    SignupComponent,
    MainTableComponent,
    MatchTableComponent,
    PartidosComponent,
    EquiposComponent,
    TacticsComponent,
    AjustesComponent,
    GridIconComponent,
    InformacionComponent,
    OpinionesComponent
//     UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatToolbarModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideFirestore(() => getFirestore()),
    provideAuth(()=>getAuth())
  ],
  providers: [ FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
