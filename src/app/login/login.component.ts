import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email ]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  });
  
  credentials={
    email:"",
    password:"",
    token:"" 
  }
  constructor(private loginService:LoginService) { }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!=null &&this.credentials.password!=null)){
      this.loginService.generateToken(this.credentials).subscribe((response:any)=>{
        console.log(response.token);
        this.credentials.token = response.token;
        this.loginService.loginUser(response.token);
        this.loginService.loginUserBackend(this.credentials).subscribe((response:any)=>{
          console.log(response);
        },error=>{
          console.log(error);
        });
        this.loginService.getEmail(response.token).subscribe((response:any)=>{
          
        })
        window.location.href="/dashboard"
        window.location.href="/middlepage"
      },error=>{
        window.alert("Invalid Credentials");
        console.log(error);
      })
    }else{
      console.log("Fields are empty !!");
    }
  }

}
