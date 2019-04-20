import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}