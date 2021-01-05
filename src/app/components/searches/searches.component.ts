/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';
import { SearchesService } from './searches.service';
import { Users } from './user/users.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent implements OnInit {
  users: Users;
  text = '';
  sort: string;
  rowData;
  minLength;
  validatingForm: FormGroup;
  columnDefs = [
    {
      field: 'atavar_url',
      headerName: '',
      width: 50,
      cellRenderer: function (params) {
        return `
          <img 
            style="border-radius: 50%" 
            src="${params.data.avatar_url}" 
            width="30" 
            height="30"
          />
        `;
      }
    },
    { field: 'login', headerName: 'Usuário', width: 150, filter: true },
    {
      field: 'html_url',
      headerName: 'URL',
      sortable: true,
      minWidth: 200,
      flex: 1
    }
  ];

  constructor(private services: SearchesService, private router: Router) {}

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      minLength: new FormControl(null, [
        Validators.required,
        Validators.minLength(1)
      ])
    });

    if (this.text.length > 0) {
      this.find('');
    }
  }

  find(value: string) {
    this.text = value;
    if (this.text.length > 0) {
      this.services
        .getUsers({ query: this.text, sort: this.sort })
        .subscribe((users: Users) => {
          this.users = users;
          this.rowData = this.users.items;
        });
    }
  }

  get input() {
    return this.validatingForm.get('minLength');
  }

  onRowClicked($event) {
    const username = $event.data.login;
    this.router.navigate([`usuario/${username}`]);
  }
}
