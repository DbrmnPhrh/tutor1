import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {
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