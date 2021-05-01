import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './components/allusers/allusers.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
{ path:'register',component:RegisterComponent},
  { path:'search',component:SearchComponent},
  { path:'allusers',component:AllusersComponent},
  { path:'login',component:LoginComponent},
  { path: 'update/:id',component:UpdateUserComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
