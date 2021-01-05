import { ActiveUsersComponent } from './views/active-users/active-users.component';
import { HomeComponent } from './views/home/home.component';
import { LastSearchesComponent } from './views/last-searches/last-searches.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRepoComponent } from './views/search-repo/search-repo.component';
import { UserComponent } from './views/user/user.component';

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
  },
  {
    path: 'buscar',
    component: SearchRepoComponent
  },
  {
    path: 'usuario/:username',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
