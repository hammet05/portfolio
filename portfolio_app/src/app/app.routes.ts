import { Routes } from '@angular/router';
import { AboutPageComponent } from './features/about/about-page.component';
import { HomePageComponent } from './features/home/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];
