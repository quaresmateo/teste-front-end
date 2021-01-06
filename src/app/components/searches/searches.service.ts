import { LocalStorageService } from 'angular-web-storage';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from './repos/repos.model';
import { User } from './user/user.model';
import { Users } from './user/users.model';

@Injectable({
  providedIn: 'root'
})
export class SearchesService {
  baseUrl = 'http://api.github.com';
  lastSearches;
  private KEY = 'lastSearches';

  constructor(private http: HttpClient, private local: LocalStorageService) {}

  getUsers({
    query,
    sort,
    order = 'desc',
    page = '1',
    per_page = '100'
  }: {
    query: string;
    sort: string;
    order?: string;
    page?: string;
    per_page?: string;
  }): Observable<Users> {
    const url = `${this.baseUrl}/search/users`;
    let params = new HttpParams();
    params = params.append('q', query);
    params = params.append('per_page', per_page);
    params = params.append('page', page);
    params = params.append('order', order);
    params = params.append('sort', sort);

    return this.http.get<Users>(url, { params });
  }

  getUser(username: string): Observable<User> {
    const url = `${this.baseUrl}/users/${username}`;
    return this.http.get<User>(url);
  }

  getRepositories({
    user,
    sort = 'updated',
    order = 'desc',
    page = '1',
    per_page = '100'
  }: {
    user: string;
    sort?: string;
    page?: string;
    per_page?: string;
    order?: string;
  }): Observable<Repos[]> {
    const url = `${this.baseUrl}/users/${user}/repos`;
    let params = new HttpParams();
    params = params.append('user', user);
    params = params.append('per_page', per_page);
    params = params.append('page', page);
    params = params.append('order', order);
    params = params.append('sort', sort);

    return this.http.get<Repos[]>(url, { params });
  }

  setLastSearches(text: string): void {
    this.lastSearches = this.local.get(this.KEY);
    if (!this.lastSearches) {
      this.local.set(this.KEY, [text]);
    } else {
      if (this.lastSearches.length >= 5) {
        this.lastSearches.shift();
        this.lastSearches.push(text);
        this.local.set(this.KEY, this.lastSearches);
      } else {
        this.lastSearches.push(text);
        this.local.set(this.KEY, this.lastSearches);
      }
    }
  }
}
