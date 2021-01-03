import { User } from './user/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchesService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://api.github.com';

  getUsers(
    query: string,
    sort: string,
    order = 'desc',
    page = '1',
    per_page = '10'
  ): Observable<User[]> {
    const url = `${this.baseUrl}/search/users`;
    let params = new HttpParams();
    params = params.append('q', query);
    params = params.append('per_page', per_page);
    params = params.append('page', page);
    params = params.append('order', order);
    params = params.append('sort', sort);

    return this.http.get<User[]>(url, {
      params
    });
  }
}
