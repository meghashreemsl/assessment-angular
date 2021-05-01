import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  user : User = new User();
  msg:any;
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
  }

  public registernow(){
    let response=this.service.userRegisteration(this.user);
    response.subscribe(data =>{
     this.msg=data;
    })
  }

}
