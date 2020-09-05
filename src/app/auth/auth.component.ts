import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html',
    styleUrls:['./auth.component.css']
})
export class AuthComponent {

    error:boolean = false;

    @ViewChild('loginForm') Lform:NgForm;
    constructor(
        private router: Router,
        private loginService: LoginService
    ) {}

    onSubmit(){
        const email = this.Lform.value.email;
        const password = this.Lform.value.password;
        if(email === "foodie@zomato.com" && password === "foodie123"){
            this.router.navigate(['/home']);
            this.loginService.userLoggedIn.emit(true);
        }  else {
            this.error = true;
        } 
    }
}