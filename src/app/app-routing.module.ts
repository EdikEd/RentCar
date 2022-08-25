import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegistComponent } from './regist/regist.component';
import { AboutComponent } from './useractions/about/about/about.component';
import { GalleryComponent } from './useractions/gallery/gallery/gallery.component';
import { RentCarComponent } from './useractions/rentcar/rent-car/rent-car.component';
import { RulesComponent } from './useractions/rules/rules/rules.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"regist",component:RegistComponent},
  {path:"admin",component:AdminComponent},
  {path:"rent-car",component:RentCarComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"rules",component:RulesComponent},
  {path:"about",component:AboutComponent},
  {path:"**",component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
