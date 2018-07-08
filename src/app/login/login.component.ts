import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(private loginService: LoginService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  validateLogin() {
    if (this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ' + result)
      }, error => {
        console.log('error is ' + error);
      });
    }
    else {
      alert('enter username and password');
    }
  }

}
