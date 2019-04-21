import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ClickComponent } from './click/click.component';
import { InputComponent } from './input/input.component';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { ChangeComponent } from './change/change.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ClickComponent, InputComponent, ChildComponent, UserComponent, ChangeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }