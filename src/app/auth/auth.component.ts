import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{
  @Input() userName: string;
  _userAge: number;

  @Input()
  set userAge(age:number) {
    if(age<0)
      this._userAge=0;
    else if(age>100)
      this._userAge=100;
    else
      this._userAge = age;
  }
  get userAge() { return this._userAge; }
}