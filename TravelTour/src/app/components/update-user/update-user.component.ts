import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private service:UserServiceService,private router:Router,private route:ActivatedRoute) { }
  user : User = new User();
  msg:any;
  id:number;

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getUserById(this.id).subscribe(data =>{
      this.msg=data;
    },error =>console.log(error));
  }

  onSubmit(){
    this.service.update(this.id,this.user).subscribe(data =>{
      this.updateUsernow();
    }
    ,error=>console.log(error));
  }
  public updateUsernow(){
  this.router.navigate(['allusers']);
 }
}
