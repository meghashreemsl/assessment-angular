import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(user:User[],searchValue:string): User[] {
    if(!user || !searchValue){
      return user;

    }
    return user.filter(dataname => 
      dataname.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
