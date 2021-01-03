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
  q: string;
  sort: string;
  columnDefs = [
    { field: 'id' },
    { field: 'login', filter: true },
    { field: 'repos_url', sortable: true }
  ];
  rowData: unknown;

  ngOnInit(): void {
    this.services.getUsers(this.q, this.sort).subscribe((users) => {
      this.users = users;
      this.rowData = this.users;
    });
  }
}
