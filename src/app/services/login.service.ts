import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8086/api/v1"
  constructor(private http: HttpClient) { }

  // calling server to generate token
  generateToken(credentials:any){
    return this.http.post(`${this.url}/generate`,credentials);
  }

  //for login user
  loginUser(token:any){    
    localStorage.setItem("token",token);
    return true;
  }

  //for backend
  loginUserBackend(credential:any ){
    return this.http.put(`${this.url}/login`,credential);
  }

  // to check user is logged in
  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token == undefined || token==='' || token == null){
      return false;
    }else{
      return true;
    }
  }
  // to check user is logged out
  logoutUser(){
    localStorage.removeItem('token');
    return false;
  }
  // to check user is logged out
  logoutUserBackend(token:any){
    return this.http.delete(`${this.url}/logout/user/${token}`);
  }

  //get loggedin user email
  getEmail(token:any){
    return this.http.get(`${this.url}/loggedIn/user/${token}`)
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
