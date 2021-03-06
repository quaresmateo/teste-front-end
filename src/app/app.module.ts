import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ActiveUsersComponent } from './views/active-users/active-users.component';
import { LastSearchesComponent } from './views/last-searches/last-searches.component';
import { SearchRepoComponent } from './views/search-repo/search-repo.component';
import { SearchesComponent } from './components/searches/searches.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './views/user/user.component';
import { RankingUsersComponent } from './components/ranking-users/ranking-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActiveUsersComponent,
    LastSearchesComponent,
    SearchRepoComponent,
    SearchesComponent,
    UserComponent,
    RankingUsersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
