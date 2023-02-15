import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms"
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
// import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FooterComponent,
    MainmenuComponent,
    LoginFormComponent,
    MainCarouselComponent
//     UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
