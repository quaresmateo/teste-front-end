/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.username = params.username));
    this.title = `Repositórios de @${this.username}`;
  }

  ngOnInit(): void {}
}
