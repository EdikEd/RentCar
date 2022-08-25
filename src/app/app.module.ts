import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FormControl, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistComponent } from './regist/regist.component';
import { AdminComponent } from './admin/admin.component';
import { GalleryComponent } from './useractions/gallery/gallery/gallery.component';
import { RulesComponent } from './useractions/rules/rules/rules.component';
import { AboutComponent } from './useractions/about/about/about.component';
import { RentCarComponent } from './useractions/rentcar/rent-car/rent-car.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    RegistComponent,
    AdminComponent,
    GalleryComponent,
    RulesComponent,
    AboutComponent,
    RentCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
