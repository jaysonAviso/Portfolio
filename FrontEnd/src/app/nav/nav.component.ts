import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() isClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  isClosed() {
    this.isClose.emit(true);
  }

}
