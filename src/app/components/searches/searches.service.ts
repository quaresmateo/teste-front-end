import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user/user.model';
import { Users } from './user/users.model';

@Injectable({
  providedIn: 'root'
})
export class SearchesService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://api.github.com';

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

    return this.http.get<Users>(url, {
      params
    });
  }

  getUser(username: string): Observable<User> {
    const url = `${this.baseUrl}/users/${username}`;
    return this.http.get<User>(url);
  }
}
