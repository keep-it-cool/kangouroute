import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school/school.component';


const routes: Routes = [
  { path: '', component: SchoolComponent, pathMatch: 'full' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
