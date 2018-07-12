import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User

  constructor(private registerService: RegisterService, private router: Router) {
    this.user = new User()
  }

  ngOnInit() {
  }

  register() {
    if (this.user.username && this.user.password) {
      this.registerService.register(this.user).subscribe(result => {
        console.log('result is ', result)
        if (result['status'] === 'success') {
          this.router.navigate(['/']);
        }
      }, error => {
        console.log('error is ', error);
      });
    }
    else {
      alert('enter username and password');
    }
  }

}
