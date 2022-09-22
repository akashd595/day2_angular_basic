import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2_angular_basic';

  ngOnInit():void{
    this.title = "Hello From Bridgelabz"
  }
}
