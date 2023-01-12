import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
// import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FooterComponent,
    MainmenuComponent
//     UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
