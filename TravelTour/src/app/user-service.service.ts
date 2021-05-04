import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserLogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private baseURL ="http://localhost:9999/update";
  constructor(private http:HttpClient) { }

  public userRegisteration(user){
    return this.http.post("http://localhost:9999/saveuser",user,{responseType:"text" as "json"});
  }
  public getUsers(){
    return this.http.get("http://localhost:9999/allusers");
  }
  public getUserByUsername(username){
    return this.http.get("http://localhost:9999/search/"+username);
  } 

  public delete(username){
    return this.http.get("http://localhost:9999/delete/"+username);
  }
  public getUserById(id){
    return this.http.get("http://localhost:9999/searchid/"+id);
  }
  public update(id:number,user:User):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,user);
  }
  public login(userlogin){
    return this.http.post("http://localhost:9999/login",userlogin,{responseType:"text" as "json"});
  }

}
