import { Routes } from '@angular/router';
import {HomeComponent} from "./paginas/home/home.component";
import {AboutComponent} from "./paginas/about/about.component";

export const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'about', component:  AboutComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
