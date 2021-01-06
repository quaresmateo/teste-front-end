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
    {
      flex: 1,
      field: 'name',
      headerName: 'Nome',
      minWidth: 200
    },
    {
      flex: 1,
      field: 'updated_at',
      headerName: 'Atualização',
      minWidth: 130,
      sortable: true,
      cellRenderer: function (params) {
        return params.data.updated_at
          .split('T')[0]
          .split('-')
          .reverse()
          .join('/');
      }
    },
    {
      flex: 1,
      field: 'homepage',
      headerName: 'Página',
      minWidth: 150,
      cellRenderer: function (params) {
        return params.data.homepage
          ? `
          <mdb-icon fas icon="users"></mdb-icon>
        <a href="${params.data.homepage}">homepage</a>
      `
          : '-';
      }
    },
    {
      flex: 1,
      field: 'language',
      minWidth: 150,
      headerName: 'Linguagem'
    },
    {
      flex: 1,
      field: 'forks',
      minWidth: 100,
      headerName: 'Forks'
    },
    {
      flex: 1,
      field: 'stargazers_count',
      minWidth: 100,
      headerName: 'Estrelas'
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
