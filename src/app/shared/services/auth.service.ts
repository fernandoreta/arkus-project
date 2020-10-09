  
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly isLoggedKey = 'isLogged';
  public urlUser = '';
  constructor() {}

  login() {
    localStorage.setItem(this.isLoggedKey, 'true');
  }

  isLoggedIn(url: string){
    const isLogged = localStorage.getItem(this.isLoggedKey);
    if (!isLogged) {
      this.urlUser = url;
      return false;
    }
    return true;
  }
  
}
