import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-last-searches',
  templateUrl: './last-searches.component.html',
  styleUrls: ['./last-searches.component.scss']
})
export class LastSearchesComponent implements OnInit {
  private KEY = 'lastSearches';
  lastSearches;

  constructor(private local: LocalStorageService) {}

  ngOnInit(): void {
    this.lastSearches = this.local.get(this.KEY);
  }
}
