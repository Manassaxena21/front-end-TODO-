import { Component, EventEmitter,Output } from '@angular/core';
import { AddtaskServiceService } from '../addtask-service.service';
import { Tasks } from '../model/task';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks:Array<Tasks> = [];

  email:string
  constructor(private service:AddtaskServiceService, private loginService:LoginService) { }
  
  task = {
    taskTitle: "",
    taskDate:"",
    categoryName: "",
    taskDescription: "",
    imagelink: ""
  }
  

  @Output()taskAdded : EventEmitter<any> = new EventEmitter<any>();

  addTask(){
    if(this.loginService.isLoggedIn()){
      window.location.href="/dashboard"
    }else{
      window.location.href="/login"
    }
    let token:string = localStorage.getItem('token').toString();

    this.loginService.getEmail(token).subscribe((response:any)=>{
      this.email=response.email;
      window.alert(this.email)
      this.service.addTask(this.task , this.email).subscribe((response:any)=>{
        console.log(response);
      },error=>{
        console.log(error);
      });
    },error=>{
      console.log(error);
    });
    
  }

  addImage(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.task.imagelink = event.target.result 
      }
    }
  }
}
