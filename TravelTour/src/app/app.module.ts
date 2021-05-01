import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllusersComponent } from './components/allusers/allusers.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    AllusersComponent,
    UpdateUserComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
