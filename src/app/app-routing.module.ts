import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WellComponent } from './well/well.component';
import { WellListComponent } from './well-list/well-list.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'well', component: WellComponent},
  {path: 'well-list', component: WellListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
