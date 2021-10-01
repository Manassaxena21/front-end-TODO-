import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url="http://localhost:8081/api/v2/";

  constructor(private http:HttpClient) { }

  register(credentials:any){
    return this.http.post(`${this.url}/register`,credentials);
  }
}
