import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
