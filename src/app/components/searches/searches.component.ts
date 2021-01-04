/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { SearchesService } from './searches.service';
import { User } from './user/user.model';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent implements OnInit, OnChanges {
  constructor(private services: SearchesService) {}
  users: User[];

  @Input() text: string;

  sort: string;
  columnDefs = [
    { field: 'id' },
    { field: 'login', filter: true },
    { field: 'repos_url', sortable: true }
  ];
  rowData: unknown;

  ngOnInit(): void {
    this.services
      .getUsers(this.text, this.sort)
      .pipe((obj) => obj)
      .subscribe((users) => {
        this.users = users;
        this.rowData = this.users;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.services
      .getUsers(changes.text.currentValue, this.sort)
      .subscribe((users) => {
        this.users = users;
        this.rowData = this.users;
      });
  }
}
