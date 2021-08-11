import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //JavaScript and TypeScript we can write together??? yeah
  title = 32432;
  message:String="Coming soon , please wait!!";


  public clearMessage(){
    this.message="";
  }

  public welcomePlease(username:String, password:String) : void {
      if("jack"==username && "jill"==password){
        this.message="Hello your username and password are correct!!!!!!!!!!!!!!!!!";
      }else{
        this.message="Sorry your username and password are not correct!!!!!!!!!!!!!!!!!";
      }
      
  }

}
