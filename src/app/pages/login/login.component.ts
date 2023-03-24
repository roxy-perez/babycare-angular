import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  faArrowLeft = faArrowLeft;
  email: string;
  password: string;

  constructor(private router: Router, public userService: UserService) {}

  exit() {
    window.close();
    this.router.navigate(['/front']);
  }

  login(form: NgForm) {
    const { email, password } = form.value;
    this.userService.login(email, password).subscribe({
      next: (user: User) => {
        if (user) this.userService.user = user;
        this.router.navigateByUrl('/home');
        return true;
      },
      error: (error: Error) => {
        console.log(error);
        return false;
      },
    });
  }
}
