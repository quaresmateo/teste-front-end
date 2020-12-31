import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ActiveUsersComponent } from './views/active-users/active-users.component';
import { LastSearchesComponent } from './views/last-searches/last-searches.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuarios-ativos',
    component: ActiveUsersComponent
  },
  {
    path: 'ultimas-buscas',
    component: LastSearchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
