import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class AddtaskServiceService {

  constructor(private httpClient: HttpClient) {
  }

  // private api:string = "http://localhost:3000/tasks"


  url = "http://localhost:8081/api/v2/user/tasks"

  getAllTask(email:any) : Observable<Array<Tasks>> {
    return this.httpClient.get<Array<Tasks>>(`${this.url}/${email}`);
  }

  addTask(task: any , email:any):Observable<Tasks> {
    return this.httpClient.post<Tasks>(`${this.url}/${email}`,task);
  }
}