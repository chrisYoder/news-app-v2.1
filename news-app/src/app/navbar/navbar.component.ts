import { Component, OnInit } from '@angular/core';
import { LINKS } from '../links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	links = LINKS; 
	
  constructor() { }

  ngOnInit(): void {
  }

}
