import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logOutUser(){
    let token:string = localStorage.getItem('token');
    this.loginService.logoutUserBackend(token).subscribe((response:any)=>{
      window.alert(response);
    },error=>{
      console.log(error);
    });
    this.loginService.logoutUser();
    location.reload();
  }

}
