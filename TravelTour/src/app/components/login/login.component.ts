import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/login';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userlogin :UserLogin = new UserLogin();
msg:any;
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
  }

  public loginNow(){
    let response = this.service.login(this.userlogin)
    response.subscribe(data =>{
      this.msg=data;
     })
   }

}
