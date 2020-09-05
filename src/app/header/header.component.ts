import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserActive:boolean = false;

  constructor(
    private loginService:LoginService,
    private router: Router
  ) { }

  ngOnInit(){

    this.loginService.userLoggedIn.subscribe(
      loggedin => {
        this.UserActive = loggedin;
      }
    );
  }

  toggleLogin(){
    if(this.UserActive){
      this.loginService.userLoggedIn.emit(false);
      this.router.navigate(['']);
    } else {
      this.router.navigate(['']);
    }
   
  }
}
