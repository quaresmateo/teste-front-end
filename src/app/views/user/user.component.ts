/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repos } from 'src/app/components/searches/repos/repos.model';
import { SearchesService } from 'src/app/components/searches/searches.service';
import { User } from 'src/app/components/searches/user/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: string;
  username: string;
  user: User;
  rowData;
  columnDefs = [
    { field: 'name', headerName: 'Nome' },
    {
      field: 'updated_at',
      sortable: true,
      cellRenderer: function (data) {
        return data.data.updated_at
          .split('T')[0]
          .split('-')
          .reverse()
          .join('/');
      }
    },
    {
      field: 'html_url',
      headerName: 'URL',
      minWidth: 200,
      flex: 1
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private services: SearchesService
  ) {
    this.route.params.subscribe((params) => (this.username = params.username));
    this.title = `Repositórios de @${this.username}`;
  }

  ngOnInit(): void {
    this.services
      .getUser(this.username)
      .subscribe((user) => (this.user = user));

    this.services
      .getRepositories({ user: this.username })
      .subscribe((repos: Repos[]) => (this.rowData = repos));
  }
}
