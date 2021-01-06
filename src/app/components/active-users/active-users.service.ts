import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../searches/user/users.model';

@Injectable({
  providedIn: 'root'
})
export class ActiveUsersService {
  baseUrl = 'http://api.github.com';

  constructor(private http: HttpClient) {}

  getUsers({
    query,
    per_page = '5'
  }: {
    query: string;
    per_page?: string;
  }): Observable<Users> {
    const url = `${this.baseUrl}/search/users`;
    let params = new HttpParams();
    params = params.append('q', query);
    params = params.append('per_page', per_page);

    return this.http.get<Users>(url, { params });
  }
}
