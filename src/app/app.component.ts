import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  framework_name:string = 'Angular';
  name:string = "Tom";
  age:number = 99;
  clicks:number = 0;
  onChanged(increased:any) {
      increased==true ? this.clicks++ : this.clicks--;
      if (this.clicks > 10) { this.clicks = 10 }
      else if (this.clicks < 0) { this.clicks = 0 };
  }

  constructor(){ this.log(`constructor`); }
}
