/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';
import { SearchesService } from './searches.service';
import { User } from './user/user.model';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent implements OnInit {
  constructor(private services: SearchesService) {}
  users: User[];
  text: string;
  sort: string;

  columnDefs = [
    { field: 'id' },
    { field: 'login', filter: true },
    { field: 'repos_url', sortable: true }
  ];

  rowData$;

  ngOnInit(): void {
    this.services
      .getUsers({ query: this.text, sort: this.sort })
      .subscribe((users: User[]) => {
        this.users = users;
        console.log(this.users);
        this.rowData$ = this.users;
      });
  }

  find(value: string) {
    this.text = value;
    this.services
      .getUsers({ query: this.text, sort: this.sort })
      .subscribe((users: User[]) => {
        this.users = users;
        this.rowData$ = this.users;
      });
  }
}
