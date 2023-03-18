import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faArrowLeft = faArrowLeft;

  constructor(private router: Router) { }

  exit() {
    window.close();
    this.router.navigate(['/front']);
  }

}
