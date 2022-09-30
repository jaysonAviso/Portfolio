import { SelectorListContext } from '@angular/compiler';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth: any;
  collapsed = false;
  navData = navbarData;

  constructor() { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.isCollapsed();
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 768) {
        this.collapsed = false;
        this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
        this.isCollapsed();
      } else {
        this.collapsed = true;
        this.isCollapsed();
      }
    }

  toggleCollapse() {
    this.collapsed =!this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  
  isCollapsed() {
    const sidenavLogo = document.getElementById('sidenav-logo');
    if(this.screenWidth > 768) {
      this.collapsed = true;
    } else {
      this.collapsed = false;
    }
  }
}
