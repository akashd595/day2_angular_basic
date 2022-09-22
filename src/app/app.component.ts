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


  imgUrl = "../assets/BridgelabzLogo.png";
  url = "https://bridgelabz.com";

  
  onClick($event : any) {
    console.log("save button is clicked", $event);
    window.open(this.url, "blank");
  }
  userName: string = "";
  nameError: string = "";
  onInput($event: any) {
    console.log("Event changed ", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect";
  
  }


}
