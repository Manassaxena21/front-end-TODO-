import { Component, OnInit } from '@angular/core';
import { AddtaskServiceService } from '../addtask-service.service';
import { Tasks } from '../model/task';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email:string;
  tasks:Array<Tasks> = [];
  gridColumns = 3;

  //constructor(){}
  constructor(private service:AddtaskServiceService,private loginService:LoginService) {

    let token:string = localStorage.getItem('token').toString();

    this.loginService.getEmail(token).subscribe((response:any)=>{
      this.email = response.email;
      this.service.getAllTask(this.email) .subscribe((data) => {
        this.tasks = data;
      });
    });

   }

  ngOnInit(): void {
  }

}
