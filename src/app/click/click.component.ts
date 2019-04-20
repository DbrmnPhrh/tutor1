import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  count: number=0;

  increase() {
    this.count++;
  };

  constructor() {  }


  ngOnInit() {
  }

}