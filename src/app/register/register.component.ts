import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required , Validators.email ]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
  
  credentials={
    username:"",
    email:"",
    password:""
  }
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  get username(){
    return this.form.get('username');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  onSubmit(){
    if((this.credentials.email!=null && this.credentials.email!='') && (this.credentials.password!='' &&this.credentials.password!=null) && (this.credentials.username!='' && this.credentials.username!=null)){
      this.registerService.register(this.credentials).subscribe(
        (response:any)=>{
          if(response!= null){
            window.location.href="/dashboard"
          }
        },error=>{
          console.log(error);
        }
      )
    }
  }

}
