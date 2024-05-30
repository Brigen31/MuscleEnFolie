import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewPageComponent } from './profile-view-page/profile-view-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileViewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
