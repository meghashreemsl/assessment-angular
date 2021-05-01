import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public username:string;
user:any;
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
  }

  public findByUsername(){
    let response = this.service.getUserByUsername(this.username);
    response.subscribe(data => this.user=data);
  }

}
