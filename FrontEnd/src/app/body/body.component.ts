import { AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  @ViewChild(MatSidenav) sidenav : MatSidenav;
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  isClose = false;

  constructor(private observer: BreakpointObserver) { }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }


  getBodyClass(): string {
    const icon = document.getElementById('sideMenu');
    let styleClass = '';
    if (this.screenWidth > 768 && this.screenWidth < 1024) {
      icon.style.opacity='0'
      styleClass = 'body-trimmed';
    } else if(this.screenWidth > 1024) {
      styleClass = 'body-lg-trimmed';
      icon.style.opacity='0'
    } else {
      styleClass = 'body-md-screen';
      icon.style.opacity='1';
    }
    return styleClass
  }

  onActive() {
    window.scroll(0, 0);
  }

  closeMode(event: boolean) {
    this.isClose = event;
    if (this.isClose) {
      this.sidenav.close();
    }
  }
}
