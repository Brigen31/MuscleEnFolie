import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MusclesComponent } from './muscles/muscles.component';
import { ProfileViewPageComponent } from './profile-view-page/profile-view-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'list', component: MusclesComponent },
  { path: 'profile', component: ProfileViewPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }