import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() hiden = false;
toggle = false;

  constructor() { }

  ngOnInit(): void {
  }

  navToggle() {
    const sideNav = document.getElementById('sideNav');
    
    if(!this.toggle) {
      const sideMenu = document.getElementById('sideNav');
      sideMenu.style.width='100%';
      sideMenu.style.height='100vh';
      sideMenu.style.display='flex';
      this.toggle = true;
    } else {
      const sideMenu = document.getElementById('sideNav');
      sideMenu.style.width='0';
      sideMenu.style.height='0';
      sideMenu.style.display='none';
      this.toggle = false;
    }

    // console.log(this.toggle);

  }

  openSideMenu() {
    const sideMenu = document.getElementById('sideNav');
    const buttonMenu = document.getElementById('buttonMenu');

    sideMenu.style.width='100%';
    sideMenu.style.height='100vh';
    buttonMenu.style.display='none';
  }

  closeSideMenu() {
    const sideMenu = document.getElementById('sideNav');
    const buttonMenu = document.getElementById('buttonMenu');

    sideMenu.style.width='0';
    sideMenu.style.height='0';
    sideMenu.style.display='none';
    buttonMenu.style.display='contents';
  }

}
