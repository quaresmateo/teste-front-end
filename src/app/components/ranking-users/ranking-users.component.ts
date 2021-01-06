import { Component, OnInit } from '@angular/core';
import { Users } from '../searches/user/users.model';
import { RankingUsersService } from './ranking-users.service';

@Component({
  selector: 'app-ranking-users',
  templateUrl: './ranking-users.component.html',
  styleUrls: ['./ranking-users.component.scss']
})
export class RankingUsersComponent implements OnInit {
  users: Users;
  query = 'location:brazil+location:brazil';
  constructor(private services: RankingUsersService) {}

  ngOnInit(): void {
    this.services.getUsers({ query: this.query }).subscribe((users: Users) => {
      this.users = users;
      console.log(users);
    });
  }
}
