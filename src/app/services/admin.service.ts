import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('http://localhost:4000/user/adminportal');
  }

  delete(user){
     return this.http.delete(`http://localhost:4000/user/delete/${user}`);
  }
}
