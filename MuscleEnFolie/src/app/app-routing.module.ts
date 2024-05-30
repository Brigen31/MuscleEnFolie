import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusclesComponent } from './muscles/muscles.component'; // Fix the import statement


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }