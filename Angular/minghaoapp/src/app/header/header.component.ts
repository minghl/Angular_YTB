import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mhdev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  title: string = '';
  constructor() {

  }

  ngOnInit(): void {

  }
}
