import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  inputs: ['userName', 'userAge']
})
export class UserComponent{
  userName: string;
  _userAge: number;

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