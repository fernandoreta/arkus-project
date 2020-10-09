import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  routeRedirect = '';
  login() {
    this.authService.login();
    this.routeRedirect = this.authService.urlUser;
    this.authService.urlUser = '';
    this.router.navigate([this.routeRedirect]);
  }

  ngOnInit() {
  }


}