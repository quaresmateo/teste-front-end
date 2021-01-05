/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';
import { SearchesService } from './searches.service';
import { Users } from './user/users.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent implements OnInit {
  constructor(private services: SearchesService) {}
  users: Users;
  text = '';
  sort: string;
  rowData;
  minLength;
  validatingForm: FormGroup;

  columnDefs = [
    { field: 'id' },
    { field: 'login', filter: true },
    { field: 'repos_url', sortable: true, minWidth: 200, flex: 1 }
  ];

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
}
