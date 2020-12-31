import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.scss']
})
export class SearchRepoComponent implements OnInit {
  constructor(private http: HttpClient) {}

  columnDefs = [
    { field: 'id' },
    { field: 'login', filter: true },
    { field: 'repos_url', sortable: true }
  ];

  rowData: unknown;

  ngOnInit(): void {
    this.rowData = this.http.get('https://api.github.com/users');
    console.log(this.rowData);
  }
}
