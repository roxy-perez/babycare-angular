import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
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

  constructor(
    private router: Router,
    public userService: UserService,
    public toastService: ToastService
  ) {}

  exit() {
    window.close();
    this.router.navigate(['/front']);
  }

  login(form: NgForm) {
    const { email, password } = form.value;
    this.userService.login(email, password).subscribe({
      next: (res: { data: { user: User } }) => {
        const { user } = res.data;
        if (user) this.userService.saveSession(user);
        this.router.navigateByUrl('/home');
        return true;
      },
      error: (error: any) => {
        const errorMessage = error.error.error.message;
        this.toastService.error(errorMessage);
        return false;
      },
    });
  }
}
