import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';
import { Users } from '../user-forms/users.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  login() {
    const user: Users | undefined = this.userDataService.getUserByEmail(
      this.email
    );

    if (user && user.password === this.password) {
      this.router.navigate(['/users']);
    } else {
      alert('Invalid email or password');
    }
  }
}
