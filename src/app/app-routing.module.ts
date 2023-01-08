import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenComponent } from './open/open.component';
import { DoneComponent } from './done/done.component';

const routes: Routes = [
  { path: '', redirectTo: '/open', pathMatch: 'full' },
  // add routes for components open and done
  { path: 'open', component: OpenComponent },
  { path: 'done', component: DoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
