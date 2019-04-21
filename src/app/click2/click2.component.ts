import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-click2',
  templateUrl: './click2.component.html',
  styleUrls: ['./click2.component.css']
})
export class Click2Component {
  @Output() onChanged = new EventEmitter<boolean>();
  change(increased:any) {
    this.onChanged.emit(increased);
  }

  @Input() userName:string;
  @Output() userNameChange = new EventEmitter<string>();

  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }


}