/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';
import { SearchesService } from './searches.service';
import { Users } from './user/users.model';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent implements OnInit {
  constructor(private services: SearchesService) {}
  users: Users;
  text: string;
  sort: string;
  gridOptions;
  rowData;

  columnDefs = [
    { field: 'id', flex: 1 },
    { field: 'login', filter: true, flex: 1 },
    { field: 'repos_url', sortable: true, flex: 1 }
  ];

  ngOnInit(): void {
    if (this.text !== undefined) {
      this.find('');
    }
  }

  find(value: string) {
    this.text = value;
    this.services
      .getUsers({ query: this.text, sort: this.sort })
      .subscribe((users: Users) => {
        this.users = users;
        this.rowData = this.users.items;
      });
  }
}
