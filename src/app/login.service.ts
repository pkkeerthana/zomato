import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class LoginService {
    userLoggedIn = new EventEmitter<boolean>();
}