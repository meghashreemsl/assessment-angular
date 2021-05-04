import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  users:any;
  searchValue:string;
  constructor(private service:UserServiceService,  private router: Router) { }

  ngOnInit(): void {
    let response=this.service.getUsers();
    response.subscribe(data => this.users = data);
  }

 public removeUser(username:string){
   let response = this.service.delete(username);
     response.subscribe(data => this.users = data);
   }
  
   public updateUser(id:number,user:User){
    this.router.navigate(['update',id]);
   }
 
}
